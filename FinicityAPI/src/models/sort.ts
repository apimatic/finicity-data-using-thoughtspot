/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, Schema } from '../schema';

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
  [key: string]: unknown;
}

export const sortSchema: Schema<Sort> = expandoObject({
  sorted: ['sorted', boolean()],
  unsorted: ['unsorted', boolean()],
  empty: ['empty', boolean()],
});
