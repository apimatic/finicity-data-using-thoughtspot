import cors from 'cors';
import dotenv from 'dotenv'
import express, { Request, Response } from 'express';
import { AuthenticationController, Client, PartnerCredentials, TransactionsController } from 'finicity-apilib';
import { getConnection } from './connection';
import { insertquery } from './jsonToSql';

dotenv.config();

export const router = express.Router();

router.use(cors())

const client = new Client({
  finicityAppKey: process.env.FINICITY_APP_KEY,
  timeout: 100000,
  finicityAppToken: process.env.FINICITY_APP_TOKEN,
});
const authenticationController = new AuthenticationController(client);

router.get('/finicitydata', finicityController);

async function finicityController(req: Request, resp: Response) {
  const customerData = { 
    customerId: BigInt(6001391193),
    fromDate: BigInt(1588365858),
    toDate: BigInt(1653110643),
    start: BigInt(1),
    limit: BigInt(1000),
    sort: 'desc',
    includePending: false
  }
  
  const tokenizedClient = await createTokenizedClient(client);
  const transactionsController = await createTransactionController(tokenizedClient);
  const { result } = await transactionsController.getCustomerTransactionsAll(
    'application/json',
    customerData.customerId,
    customerData.fromDate,
    customerData.toDate,
    customerData.start,
    customerData.limit,
    customerData.sort,
    customerData.includePending);

    const autoQuery = insertquery(result);

    //create snowflake connection
    var connection = getConnection();      
    console.log("connectionId is: ", connection.getId());

    connection.execute(
    {
      sqlText: `DELETE FROM TRANSACDATA`,
      streamResult: true,
      complete: function (_err, stmt, rows) {
        rows = [];
        stmt.streamRows(
          //   {
          //   start: 0,
          //   end: 10,
          // }
        )
          .on('error', function (err) {
            console.error('Unable to consume requested rows');
          })
          .on('data', function (row) {
            if (typeof rows !== 'undefined')
              rows.push(row);
            console.log("rows: ", rows);
          })
          .on('end', function () {
            if (typeof rows !== 'undefined')
              console.log('Number of rows consumed for delete : ' + rows.length);
          });
      }
    });
      
  connection.execute(
    {
      sqlText: autoQuery,
      streamResult: true,
      complete: function (err, stmt, rows) {
        rows = [];
        stmt.streamRows(
        //   {
        //   start: 0,
        //   end: 10,
        // }
        )
          .on('error', function (err) {
            console.error('Unable to consume requested rows');
          })
          .on('data', function (row) {
            if (typeof rows !== 'undefined')
              rows.push(row);
            console.log("rows: ", rows);
          })
          .on('end', function () {
            if (typeof rows !== 'undefined')
              console.log('Number of rows consumed for insert: ' + rows.length);
              resp.send(200);
          });
      }
    });
}

async function getAccessToken() {
  const body: PartnerCredentials = {
    partnerId: process.env.FINICITY_PARTNER_ID ?? '',
    partnerSecret: process.env.FINICITY_PARTNER_SECRET ?? '',
  };
  const { result } = await authenticationController.partnerAuthentication('application/json', 'application/json', body);
  return result.token;
}

async function createTokenizedClient(client: Client) {
  return client.withConfiguration({ finicityAppToken: await getAccessToken() });
}

async function createTransactionController(client: Client) {
  return new TransactionsController(client);
}