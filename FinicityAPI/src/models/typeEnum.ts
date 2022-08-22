/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TypeEnum
 */
export enum TypeEnum {
  Voi = 'voi',
  Voa = 'voa',
  VoaHistory = 'voaHistory',
  History = 'history',
  VoieTxverify = 'voieTxVerify',
  VoieWithReport = 'voieWithReport',
  VoieWithInterview = 'voieWithInterview',
  Paystatement = 'paystatement',
  PreQualVoa = 'preQualVoa',
  AssetSummary = 'assetSummary',
  VoieWithStatement = 'voieWithStatement',
  Transactions = 'transactions',
  Statement = 'statement',
  VoiePayroll = 'voiePayroll',
  VoeTransactions = 'voeTransactions',
  VoePayroll = 'voePayroll',
}

/**
 * Schema for TypeEnum
 */
export const typeEnumSchema: Schema<TypeEnum> = stringEnum(TypeEnum);
