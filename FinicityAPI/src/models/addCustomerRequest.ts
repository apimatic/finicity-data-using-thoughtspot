/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

/** Request Structure For The Add Customer Endpoint and Add Testing Customer Endpoint */
export interface AddCustomerRequest {
  /** The customer’s username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ – + the use of email in this field is discouraged it is recommended to use a unique non-email identifier Use of special characters may result in an error (e.g. í, ü, etc.) */
  username: string;
  /** The customer’s first name(s) / given name(s) (optional) */
  firstName?: string;
  /** The customer’s last name(s) / surname(s) (optional) */
  lastName?: string;
  /** The application Id for the app the partner would like to assign the customer to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app this can be omitted. This value comes from the "applicationId" from the Get App Registration Status endpoint */
  applicationId?: string;
  [key: string]: unknown;
}

export const addCustomerRequestSchema: Schema<AddCustomerRequest> = expandoObject(
  {
    username: ['username', string()],
    firstName: ['firstName', optional(string())],
    lastName: ['lastName', optional(string())],
    applicationId: ['applicationId', optional(string())],
  }
);
