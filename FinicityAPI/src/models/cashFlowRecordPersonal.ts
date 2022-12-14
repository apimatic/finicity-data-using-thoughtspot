/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  Schema,
  string,
} from '../schema';
import {
  CashFlowCashflowBalanceSummary,
  cashFlowCashflowBalanceSummarySchema,
} from './cashFlowCashflowBalanceSummary';
import {
  CashFlowCashFlowCharacteristicsSummary,
  cashFlowCashFlowCharacteristicsSummarySchema,
} from './cashFlowCashFlowCharacteristicsSummary';
import {
  CashFlowCashFlowCreditSummary,
  cashFlowCashFlowCreditSummarySchema,
} from './cashFlowCashFlowCreditSummary';
import {
  CashFlowCashflowDebitSummary,
  cashFlowCashflowDebitSummarySchema,
} from './cashFlowCashflowDebitSummary';
import {
  CashFlowInstitution,
  cashFlowInstitutionSchema,
} from './cashFlowInstitution';
import {
  CashFlowPossibleLoanDeposits,
  cashFlowPossibleLoanDepositsSchema,
} from './cashFlowPossibleLoanDeposits';

export interface CashFlowRecordPersonal {
  /** The Finicity report ID (max length 32 characters) */
  id: string;
  /** GSE enabled */
  gseEnabled: boolean;
  /** The Finicity portfolio ID */
  portfolioId: string;
  /** `active` or `testing` */
  customerType: string;
  /** Finicity customer ID */
  customerId: string;
  /** Finicity's request Id */
  requestId: string;
  /** “Finicity Cash Flow Report  - Personal” */
  title: string;
  /** Finicity report consumer ID (max length 32 characters) */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number */
  consumerSsn: string;
  /** Name of requester */
  requesterName: string;
  /** `cfrp` or `cfrb` */
  type: string;
  /** `inProgress` or `success` or `failure` */
  status: string;
  /** The date the report was generated */
  createdDate: bigint;
  /** The `postedDate` of the earliest transaction analyzed for this report */
  startDate: bigint;
  /** The `postedDate` of the latest transaction analyzed for this report */
  endDate: bigint;
  /** Number of days covered by the report */
  days: string;
  /** `true` if the report covers more than 365 days. */
  seasoned: boolean;
  /** A list of `institution` records, including information about the individual accounts used in this report. */
  institutions: CashFlowInstitution[];
  /** A `cashFlowBalanceSummary` record */
  cashFlowBalanceSummary: CashFlowCashflowBalanceSummary;
  /** A `cashFlowCreditSummary` record */
  cashFlowCreditSummary: CashFlowCashFlowCreditSummary;
  /** A `cashFlowDebitSummary` record */
  cashFlowDebitSummary: CashFlowCashflowDebitSummary;
  /** A `cashFlowCharacteristicsSummary` record */
  cashFlowCharacteristicsSummary: CashFlowCashFlowCharacteristicsSummary;
  /** A `possibleLoanDeposits` record */
  possibleLoanDeposits: CashFlowPossibleLoanDeposits[];
  [key: string]: unknown;
}

export const cashFlowRecordPersonalSchema: Schema<CashFlowRecordPersonal> = expandoObject(
  {
    id: ['id', string()],
    gseEnabled: ['gseEnabled', boolean()],
    portfolioId: ['portfolioId', string()],
    customerType: ['customerType', string()],
    customerId: ['customerId', string()],
    requestId: ['requestId', string()],
    title: ['title', string()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    requesterName: ['requesterName', string()],
    type: ['type', string()],
    status: ['status', string()],
    createdDate: ['createdDate', bigint()],
    startDate: ['startDate', bigint()],
    endDate: ['endDate', bigint()],
    days: ['days', string()],
    seasoned: ['seasoned', boolean()],
    institutions: [
      'institutions',
      array(lazy(() => cashFlowInstitutionSchema)),
    ],
    cashFlowBalanceSummary: [
      'cashFlowBalanceSummary',
      lazy(() => cashFlowCashflowBalanceSummarySchema),
    ],
    cashFlowCreditSummary: [
      'cashFlowCreditSummary',
      lazy(() => cashFlowCashFlowCreditSummarySchema),
    ],
    cashFlowDebitSummary: [
      'cashFlowDebitSummary',
      lazy(() => cashFlowCashflowDebitSummarySchema),
    ],
    cashFlowCharacteristicsSummary: [
      'cashFlowCharacteristicsSummary',
      lazy(() => cashFlowCashFlowCharacteristicsSummarySchema),
    ],
    possibleLoanDeposits: [
      'possibleLoanDeposits',
      array(lazy(() => cashFlowPossibleLoanDepositsSchema)),
    ],
  }
);
