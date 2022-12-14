/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { Account, accountSchema } from './account';

export interface TpAccounts {
  accounts: Account[];
  [key: string]: unknown;
}

export const tpAccountsSchema: Schema<TpAccounts> = expandoObject({
  accounts: ['accounts', array(lazy(() => accountSchema))],
});
