/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, Schema, string } from '../schema';
import { CustomerTypeEnum, customerTypeEnumSchema } from './customerTypeEnum';

/** The finicity customer record */
export interface Customer {
  /** Finicity’s ID for the customer */
  id: bigint;
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
  [key: string]: unknown;
}

export const customerSchema: Schema<Customer> = expandoObject({
  id: ['id', bigint()],
  username: ['username', string()],
  firstName: ['firstName', string()],
  lastName: ['lastName', string()],
  type: ['type', customerTypeEnumSchema],
  createdDate: ['createdDate', string()],
});
