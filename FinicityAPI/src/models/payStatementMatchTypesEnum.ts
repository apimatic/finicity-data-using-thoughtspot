/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayStatementMatchTypesEnum
 */
export enum PayStatementMatchTypesEnum {
  NETPAYMATCH = 'NET_PAY_MATCH',
  SPLITINTERVIEWAMOUNTSUMTONETPAYMATCH = 'SPLIT_INTERVIEW_AMOUNT_SUM_TO_NET_PAY_MATCH',
  SPLITDIRECTDEPOSITSUMTONETPAYMATCH = 'SPLIT_DIRECT_DEPOSIT_SUM_TO_NET_PAY_MATCH',
  SPLITLESSTHANNETPAYSUMTONETPAYMATCH = 'SPLIT_LESS_THAN_NET_PAY_SUM_TO_NET_PAY_MATCH',
  PARTIAL = 'PARTIAL',
  TRANSACTIONDATERANGEINVALID = 'TRANSACTION_DATE_RANGE_INVALID',
  NOMATCH = 'NO_MATCH',
}

/**
 * Schema for PayStatementMatchTypesEnum
 */
export const payStatementMatchTypesEnumSchema: Schema<PayStatementMatchTypesEnum> = stringEnum(PayStatementMatchTypesEnum);
