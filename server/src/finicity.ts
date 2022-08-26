import cors from 'cors';
import dotenv from 'dotenv'
import express, { Request, Response } from 'express';
import { getConnection } from './connection';
import { insertquery } from './jsonToSql';

dotenv.config();

export const router = express.Router();

router.use(cors())


router.get('/finicitydata', finicityController);

async function finicityController(req: Request, resp: Response) {

  // add code to call get transactions all endpoint

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


// add code to get access token
async function getAccessToken() {
}

// add code to get tokenized client
async function createTokenizedClient(client: Client) {
}

// add code to create transactions controller with initialized client
async function createTransactionController(client: Client) {
}