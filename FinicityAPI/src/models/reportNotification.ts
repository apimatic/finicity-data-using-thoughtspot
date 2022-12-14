/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface ReportNotification {
  /** Finicity’s consumer ID. This field is optional and may not always return. */
  consumerId?: string;
  /** The last four of the consumer’s social security number. This field is optional and may not always return. */
  consumerSsn?: string;
  /** The event name of the webhook. This will either be inProgress, failed, primaryFieldUpdate, or done. */
  eventName?: string;
  /** Finicity’s report ID */
  id?: string;
  /** inProgress, success, failure, or editing */
  status?: string;
  /** Finicity’s report type. This field is optional and may not always return. */
  type?: string;
  [key: string]: unknown;
}

export const reportNotificationSchema: Schema<ReportNotification> = expandoObject(
  {
    consumerId: ['consumerId', optional(string())],
    consumerSsn: ['consumerSsn', optional(string())],
    eventName: ['eventName', optional(string())],
    id: ['id', optional(string())],
    status: ['status', optional(string())],
    type: ['type', optional(string())],
  }
);
