import cors from 'cors';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { isQueryData } from './queryData';

export const router = express.Router();
router.use(cors());

dotenv.config();

// add code to initialize the client and session controller

router.get("/", thoughtspotController);

async function thoughtspotController(req: Request, resp: Response) {
  const measure = req.query.measure;
  const attribute = req.query.attribute;

  // add code to call search query data through data controller

  let dataResult1 = [];
  if (isQueryData(result)) {
    for (let i = 0; i < result.data.length; i++) {
      dataResult1.push({ name: result.data[i][0], value: result.data[i][1] });
    }
  }
  try {
    //sending graph plotting data
    resp.send(dataResult1);
  } catch (error) {
    resp.send(error)
  }
}

async function getBearerToken(): Promise<string | undefined> {
  // add code to get token through session controller
}

async function createDataController(client: Client) {
  // add code to create data controller
}