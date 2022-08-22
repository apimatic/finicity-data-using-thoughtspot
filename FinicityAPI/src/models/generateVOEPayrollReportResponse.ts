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
import {
  PayrollReportRefreshResponseConstraints,
  payrollReportRefreshResponseConstraintsSchema,
} from './payrollReportRefreshResponseConstraints';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface GenerateVOEPayrollReportResponse {
  /** Finicity's report ID */
  id: string;
  /** Finicity’s portfolio ID associated with the consumer on the report. */
  portfolioId: string;
  /** Customer type */
  customerType: string;
  /** Finicity ID for the customer */
  customerId: bigint;
  /** Unique requestId for this specific call request */
  requestId: string;
  /** Name of Finicity partner requesting the report */
  requesterName: string;
  /** The date the report was generated */
  createdDate: bigint;
  /** Title of the report */
  title: string;
  /** Finicity report consumer ID (max length 32 characters) */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number */
  consumerSsn: string;
  constraints: PayrollReportRefreshResponseConstraints;
  /** Report type */
  type: TypeEnum;
  /** inProgress, success, or failure */
  status: string;
  errors?: ErrorMessage[];
  [key: string]: unknown;
}

export const generateVOEPayrollReportResponseSchema: Schema<GenerateVOEPayrollReportResponse> = expandoObject(
  {
    id: ['id', string()],
    portfolioId: ['portfolioId', string()],
    customerType: ['customerType', string()],
    customerId: ['customerId', bigint()],
    requestId: ['requestId', string()],
    requesterName: ['requesterName', string()],
    createdDate: ['createdDate', bigint()],
    title: ['title', string()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    constraints: [
      'constraints',
      lazy(() => payrollReportRefreshResponseConstraintsSchema),
    ],
    type: ['type', typeEnumSchema],
    status: ['status', string()],
    errors: ['errors', optional(array(lazy(() => errorMessageSchema)))],
  }
);