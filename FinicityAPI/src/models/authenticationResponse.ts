/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface AuthenticationResponse {
  /** A Temporary Access Token Which Must Be Passed In The HTTP Header "Finicity-App-Token" On All Subsequent API Requests. */
  token: string;
  [key: string]: unknown;
}

export const authenticationResponseSchema: Schema<AuthenticationResponse> = expandoObject(
  { token: ['token', string()] }
);
