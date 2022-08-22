/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface PartnerCredentials {
  /** Partner ID From Developer Portal */
  partnerId: string;
  /** Partner Secret From Developer Portal */
  partnerSecret: string;
  [key: string]: unknown;
}

export const partnerCredentialsSchema: Schema<PartnerCredentials> = expandoObject(
  {
    partnerId: ['partnerId', string()],
    partnerSecret: ['partnerSecret', string()],
  }
);
