/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { ErrorMessage, errorMessageSchema } from './errorMessage';
import { TypeEnum, typeEnumSchema } from './typeEnum';
import {
  VOIEPaystubWithTxverifyResponseConstraints,
  vOIEPaystubWithTxverifyResponseConstraintsSchema,
} from './vOIEPaystubWithTxverifyResponseConstraints';

export interface GenerateVOIEPaystubWithTxverifyReportResponse {
  /** Finicity's report ID */
  id: string;
  /** Finicity’s portfolio ID associated with the consumer on the report. */
  portfolioId: string;
  /** Finicity ID for the customer */
  customerId: bigint;
  /** Finicity report consumer ID (max length 32 characters) */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number */
  consumerSsn: string;
  /** Name of Finicity partner requesting the report */
  requesterName: string;
  /** Unique requestId for this specific call request */
  requestId: string;
  errors?: ErrorMessage[];
  /** The date the report was generated */
  createdDate: bigint;
  /** Customer type */
  customerType: string;
  constraints: VOIEPaystubWithTxverifyResponseConstraints;
  /** Title of the report */
  title: string;
  /** Report type */
  type: TypeEnum;
  /** inProgress, success, or failure */
  status: string;
  [key: string]: unknown;
}

export const generateVOIEPaystubWithTxverifyReportResponseSchema: Schema<GenerateVOIEPaystubWithTxverifyReportResponse> = expandoObject(
  {
    id: ['id', string()],
    portfolioId: ['portfolioId', string()],
    customerId: ['customerId', bigint()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    requesterName: ['requesterName', string()],
    requestId: ['requestId', string()],
    errors: ['errors', optional(array(lazy(() => errorMessageSchema)))],
    createdDate: ['createdDate', bigint()],
    customerType: ['customerType', string()],
    constraints: [
      'constraints',
      lazy(() => vOIEPaystubWithTxverifyResponseConstraintsSchema),
    ],
    title: ['title', string()],
    type: ['type', typeEnumSchema],
    status: ['status', string()],
  }
);
