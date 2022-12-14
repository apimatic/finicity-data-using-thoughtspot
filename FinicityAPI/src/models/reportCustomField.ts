/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema, string } from '../schema';

export interface ReportCustomField {
  /** The name of the custom field */
  label?: string;
  /** The value of the custom field */
  value?: string;
  /** The shown variable designates whether the custom field will display on the PDF report. When shown is true, the custom field will show on the PDF. */
  shown?: boolean;
  [key: string]: unknown;
}

export const reportCustomFieldSchema: Schema<ReportCustomField> = expandoObject(
  {
    label: ['label', optional(string())],
    value: ['value', optional(string())],
    shown: ['shown', optional(boolean())],
  }
);
