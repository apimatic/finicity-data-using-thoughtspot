/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import { CustomerTypeEnum, customerTypeEnumSchema } from './customerTypeEnum';

/** The finicity customer record */
export interface CustomerWithApplicationData {
  /** Finicity’s ID for the customer */
  id: string;
  /** The username associated with the customer */
  username: string;
  /** The first name associated with the customer */
  firstName: string;
  /** The last name associated with the customer */
  lastName: string;
  /** active or testing */
  type: CustomerTypeEnum;
  /** The date the customer was created */
  createdDate: string;
  /** The application id of the application assigned to the customer */
  applicationId: string;
  /** The application name of the application assigned to the customer */
  applicationName: string;
  [key: string]: unknown;
}

export const customerWithApplicationDataSchema: Schema<CustomerWithApplicationData> = expandoObject(
  {
    id: ['id', string()],
    username: ['username', string()],
    firstName: ['firstName', string()],
    lastName: ['lastName', string()],
    type: ['type', customerTypeEnumSchema],
    createdDate: ['createdDate', string()],
    applicationId: ['applicationId', string()],
    applicationName: ['applicationName', string()],
  }
);
