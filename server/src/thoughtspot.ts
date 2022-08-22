import cors from 'cors';
import { Client, DataController, SessionController, TspublicRestV2SessionGettokenRequest } from '@thoughtspot/rest-api-sdk';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { isQueryData } from './queryData';

export const router = express.Router();
router.use(cors());

dotenv.config();

const client = new Client({
  acceptLanguage: 'application/json',
  contentType: 'application/json',
  timeout: 100000,
  accessToken: process.env.THOUGHTSPOT_ACCESS_TOKEN,
  baseUrl: 'https://my2.thoughtspot.cloud',
})
const sessionController = new SessionController(client);

router.get("/", thoughtspotController);

async function thoughtspotController(req: Request, resp: Response) {
  const measure = req.query.measure;
  const attribute = req.query.attribute;
  try {
    const body = {
      queryString: `[${attribute}] [${measure}]`,
      dataObjectId: 'edc2734b-065b-4f8e-8770-1a0e233044a0',
    };

    const dataController = await createDataController(client);
    const { result } = await dataController.searchQueryData(body);
    let dataResult1 = [];
    if (isQueryData(result)) {
      for (let i = 0; i < result.data.length; i++) {
        dataResult1.push({ name: result.data[i][0], value: result.data[i][1] });
      }
    }

    //sending graph plotting data
    resp.send(dataResult1);
  } catch (error) {
    resp.send(error)
  }
}

async function getBearerToken(): Promise<string | undefined> {
  const body: TspublicRestV2SessionGettokenRequest = {
    userName: process.env.THOUGHTSPOT_USER_NAME || '',
    password: process.env.THOUGHTSPOT_PASSWORD || '',
  };
  const { result } = await sessionController.getToken(body);
  console.log(result);
  return result.token;
}

async function createDataController(client: Client) {
  const tokenizedClient = client.withConfiguration( { accessToken: await getBearerToken()} );
  return new DataController(tokenizedClient);
}