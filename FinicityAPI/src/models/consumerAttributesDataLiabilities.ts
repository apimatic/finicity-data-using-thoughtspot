/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, unknown } from '../schema';

export interface ConsumerAttributesDataLiabilities {
  /** Monthly loan deposits amount by account. */
  monthlyLoanDeposits?: unknown;
  /** Monthly loan withdrawal amount by account. */
  monthlyLoanWitdrawls?: unknown;
  /** Monthly count of the number of loan deposits by account. */
  monthlyNumberOfLoanDeposits?: unknown;
  /** Monthly amount of the number of loan deposits by account. */
  monthlyNumberOfLoanWithdrawls?: unknown;
  [key: string]: unknown;
}

export const consumerAttributesDataLiabilitiesSchema: Schema<ConsumerAttributesDataLiabilities> = expandoObject(
  {
    monthlyLoanDeposits: ['monthlyLoanDeposits', unknown()],
    monthlyLoanWitdrawls: ['monthlyLoanWitdrawls', unknown()],
    monthlyNumberOfLoanDeposits: ['monthlyNumberOfLoanDeposits', unknown()],
    monthlyNumberOfLoanWithdrawls: ['monthlyNumberOfLoanWithdrawls', unknown()],
  }
);
