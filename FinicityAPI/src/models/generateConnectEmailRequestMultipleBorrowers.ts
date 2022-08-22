/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  ConnectEmailOptions,
  connectEmailOptionsSchema,
} from './connectEmailOptions';
import {
  ConnectOauthOptions,
  connectOauthOptionsSchema,
} from './connectOauthOptions';
import {
  ReportCustomFields,
  reportCustomFieldsSchema,
} from './reportCustomFields';

export interface GenerateConnectEmailRequestMultipleBorrowers {
  /** The partner id you can obtain from your Finicity developer dashboard */
  partnerId: string;
  /** The customers' information */
  customers: unknown[];
  /** The url that customers will be redirected to after completing Finicity Connect. */
  redirectUri?: string;
  /** The report type you wish to have generated for you. Valid types include ‘voa’, ‘voi’, and ‘aggregation’ */
  type: string;
  /** The publicly available url you wish to be posted to when the user starts Finicity Connect, and completes, it etc.  This is an optional field */
  webhook?: string;
  /** The format of the data you wish to be posted to your server. Valid values are ‘application/json’ and ‘application/xml’ This field is optional. */
  webhookContentType?: string;
  /** Allows additional identifiable information to be inserted into webhooks (value1, value2, etc.). Alternative naming conventions may be desired in place of value1, value2 for specific values (e.g. loanNumber, currentDate, etc.) This field is optional. */
  webhookData?: unknown;
  /** Headers to be included with webhook events */
  webhookHeaders?: unknown;
  /** Institution id (required for type=lite) */
  institutionId?: number;
  /** oauthOptions for oauthEnabled institutions */
  oauthOptions?: ConnectOauthOptions;
  /** Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field.  Set the shown variable to true if you want the custom field to display in the JSON, XML, and PDF reports. Set the shown variable to false if you do not wish to see this field in the report. All custom fields will display in the Reseller Billing endpoint.   This is optional. */
  reportCustomFields?: ReportCustomFields[];
  /** Google Analytics can be used with Connect to provide an additional layer of transparency of end user engagement. This field is optional */
  analytics?: string;
  /** Boolean indicating if Connect should generate the report */
  skipReport?: boolean;
  email?: ConnectEmailOptions;
  [key: string]: unknown;
}

export const generateConnectEmailRequestMultipleBorrowersSchema: Schema<GenerateConnectEmailRequestMultipleBorrowers> = expandoObject(
  {
    partnerId: ['partnerId', string()],
    customers: ['customers', array(unknown())],
    redirectUri: ['redirectUri', optional(string())],
    type: ['type', string()],
    webhook: ['webhook', optional(string())],
    webhookContentType: ['webhookContentType', optional(string())],
    webhookData: ['webhookData', optional(unknown())],
    webhookHeaders: ['webhookHeaders', optional(unknown())],
    institutionId: ['institutionId', optional(number())],
    oauthOptions: [
      'oauthOptions',
      optional(lazy(() => connectOauthOptionsSchema)),
    ],
    reportCustomFields: [
      'reportCustomFields',
      optional(array(lazy(() => reportCustomFieldsSchema))),
    ],
    analytics: ['analytics', optional(string())],
    skipReport: ['skipReport', optional(boolean())],
    email: ['email', optional(lazy(() => connectEmailOptionsSchema))],
  }
);
