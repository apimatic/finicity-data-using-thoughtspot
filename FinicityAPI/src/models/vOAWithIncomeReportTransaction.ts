/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  TransactionTypeEnum,
  transactionTypeEnumSchema,
} from './transactionTypeEnum';

export interface VOAWithIncomeReportTransaction {
  /** The Finicity ID of the transaction */
  id: bigint;
  /** The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. */
  amount: number;
  /** A timestamp showing when the transaction was posted or cleared by the institution (see Handling Dates and Times) */
  postedDate: bigint;
  /** The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of “No description provided by institution”. All other values are provided by the institution. */
  description: string;
  /** The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value */
  memo?: string;
  /** A normalized payee, derived from the transaction's description and memo fields. */
  normalizedPayee: string;
  /** The unique identifier given by the FI for each transaction. */
  institutionTransactionId: string;
  /** The categorization of the transaction. */
  category: string;
  /** One of the values from Transaction Types (optional) */
  type?: TransactionTypeEnum;
  /** The type of investment security (VOA only) */
  securityType?: string;
  /** Investment symbol (VOA only) */
  symbol?: string;
  commission?: number;
  [key: string]: unknown;
}

export const vOAWithIncomeReportTransactionSchema: Schema<VOAWithIncomeReportTransaction> = expandoObject(
  {
    id: ['id', bigint()],
    amount: ['amount', number()],
    postedDate: ['postedDate', bigint()],
    description: ['description', string()],
    memo: ['memo', optional(string())],
    normalizedPayee: ['normalizedPayee', string()],
    institutionTransactionId: ['institutionTransactionId', string()],
    category: ['category', string()],
    type: ['type', optional(transactionTypeEnumSchema)],
    securityType: ['securityType', optional(string())],
    symbol: ['symbol', optional(string())],
    commission: ['commission', optional(number())],
  }
);