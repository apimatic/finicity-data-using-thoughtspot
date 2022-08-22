/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface PayrollEmployerAddress {
  /** Employer address as stated by the employer in the payroll system */
  address1?: string;
  /** Employer city as stated by the employer in the payroll system */
  city?: string;
  /** Employer state as stated by the employer in the payroll system */
  state?: string;
  /** Employer zip code as stated by the employer in the payroll system */
  zip?: string;
  [key: string]: unknown;
}

export const payrollEmployerAddressSchema: Schema<PayrollEmployerAddress> = expandoObject(
  {
    address1: ['address1', optional(string())],
    city: ['city', optional(string())],
    state: ['state', optional(string())],
    zip: ['zip', optional(string())],
  }
);
