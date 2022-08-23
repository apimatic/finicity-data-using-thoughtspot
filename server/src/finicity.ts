import cors from 'cors';
import dotenv from 'dotenv'
import express, { Request, Response } from 'express';
import { AuthenticationController, Client, PartnerCredentials, TransactionsController } from 'finicity-apilib';
import { getConnection } from './connection';
import { insertquery } from './jsonToSql';

dotenv.config();

export const router = express.Router();

router.use(cors())


router.get('/finicitydata', finicityController);

async function finicityController(req: Request, resp: Response) {


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

}

async function createTokenizedClient(client: Client) {
}

async function createTransactionController(client: Client) {
}