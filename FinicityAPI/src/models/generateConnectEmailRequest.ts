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
  FinicityConnectTypeEnum,
  finicityConnectTypeEnumSchema,
} from './finicityConnectTypeEnum';
import {
  ReportCustomFields,
  reportCustomFieldsSchema,
} from './reportCustomFields';

export interface GenerateConnectEmailRequest {
  /** The partner id you can obtain from your Finicity developer dashboard */
  partnerId: string;
  /** Finicity’s customer ID. Obtained from the Add Customer call. */
  customerId: string;
  /** Finicity’s consumer ID. Obtained from the Create Consumer call. <br> *Required for any connect type that generate a report* */
  consumerId?: string;
  /** The type of connect flow you want for the customer/consumer. Email does not support types aggregation, lite and fix. See Finicity Connect Type For Definitions. */
  type: FinicityConnectTypeEnum;
  /** Boolean indicating if Connect should generate the report at the end of the flow */
  skipReport?: boolean;
  /** The `fromDate` param is an Epoch Timestamp (in seconds), such as “1494449017”. Without this param, the report defaults to 6 months if available. If included, the epoch timestamp should be 10 digits long, and be within two years of the present day. Extending the epoch timestamp beyond 10 digits will default back to six months of data. This is an optional field for use with only “voa” Connect type. The fromDate param should not be used with the “voi” Connect type. */
  fromDate?: string;
  /** Enter the value 2 here if the consumer needs to upload the 2 most recent pay statements. Applicable only for VOIE products. */
  paystubs?: string;
  /** The url that customers will be redirected to after completing Finicity Connect. <br> *Required unless Connect is embedded inside your application. (iframe)* */
  redirectUri?: string;
  /** The publicly available URL you wish to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs-new.finicitydev.com/connect-webhooks/) for event details. */
  webhook?: string;
  /** The Content Type The Webhooks Events Will Be Sent In. Supported Types `application/json` and `application/xml` */
  webhookContentType?: string;
  /** Allows additional identifiable information to be inserted into the payload of connect webhook events. See this article for [Details](https://docs-new.finicitydev.com/connect-custom-webhook-data-and-headers/). */
  webhookData?: unknown;
  /** Allows additional identifiable information to be included as headers of connect webhook event. See this article for [Details](https://docs-new.finicitydev.com/connect-custom-webhook-data-and-headers/). */
  webhookHeaders?: unknown;
  /** Advanced options for configuration of which institutions to display in. See this article for [Details](https://docs-new.finicitydev.com/connect-institutions-options/) */
  institutionSettings?: unknown;
  /** Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field.  Set the shown variable to true if you want the custom field to display in the JSON, XML, and PDF reports. Set the shown variable to false if you do not wish to see this field in the report. All custom fields will display in the Reseller Billing endpoint.   This is optional. */
  reportCustomFields?: ReportCustomFields[];
  /** Google Analytics or Adobe Analytics can be used with Connect to provide an additional layer of transparency of end user engagement. This is optional. */
  analytics?: string;
  /** Customizable email details */
  email: ConnectEmailOptions;
  [key: string]: unknown;
}

export const generateConnectEmailRequestSchema: Schema<GenerateConnectEmailRequest> = expandoObject(
  {
    partnerId: ['partnerId', string()],
    customerId: ['customerId', string()],
    consumerId: ['consumerId', optional(string())],
    type: ['type', finicityConnectTypeEnumSchema],
    skipReport: ['skipReport', optional(boolean())],
    fromDate: ['fromDate', optional(string())],
    paystubs: ['paystubs', optional(string())],
    redirectUri: ['redirectUri', optional(string())],
    webhook: ['webhook', optional(string())],
    webhookContentType: ['webhookContentType', optional(string())],
    webhookData: ['webhookData', optional(unknown())],
    webhookHeaders: ['webhookHeaders', optional(unknown())],
    institutionSettings: ['institutionSettings', optional(unknown())],
    reportCustomFields: [
      'reportCustomFields',
      optional(array(lazy(() => reportCustomFieldsSchema))),
    ],
    analytics: ['analytics', optional(string())],
    email: ['email', lazy(() => connectEmailOptionsSchema)],
  }
);
