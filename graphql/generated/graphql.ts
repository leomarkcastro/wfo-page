/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Api_Application_CreateOutput = {
  __typename?: 'Api_Application_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Application_DeleteOutput = {
  __typename?: 'Api_Application_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Application_GetOutput = {
  __typename?: 'Api_Application_getOutput';
  data?: Maybe<Api_Application_GetOutputData>;
};

export type Api_Application_GetOutputData = {
  __typename?: 'Api_Application_getOutputData';
  applicationDate?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  memberType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  society?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Application_ListOutput = {
  __typename?: 'Api_Application_listOutput';
  data?: Maybe<Array<Maybe<Api_Application_ListOutputData>>>;
  page?: Maybe<Api_Application_ListOutputPage>;
};

export type Api_Application_ListOutputData = {
  __typename?: 'Api_Application_listOutputData';
  applicationDate?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  memberType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  society?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Application_ListOutputPage = {
  __typename?: 'Api_Application_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Application_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Application_ListOutputPageRange = {
  __typename?: 'Api_Application_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Application_UpdateOutput = {
  __typename?: 'Api_Application_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Education_AggregateOutput = {
  __typename?: 'Api_Education_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Education_AggregateOutputBreakdown>>>;
};

export type Api_Education_AggregateOutputBreakdown = {
  __typename?: 'Api_Education_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Education_CreateOutput = {
  __typename?: 'Api_Education_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Education_DeleteOutput = {
  __typename?: 'Api_Education_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Education_GetOutput = {
  __typename?: 'Api_Education_getOutput';
  data?: Maybe<Api_Education_GetOutputData>;
};

export type Api_Education_GetOutputData = {
  __typename?: 'Api_Education_getOutputData';
  achievement?: Maybe<Scalars['String']['output']>;
  dateOfAchievement?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Api_Education_GroupByOutput = {
  __typename?: 'Api_Education_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Education_GroupByOutputBreakdown>>>;
};

export type Api_Education_GroupByOutputBreakdown = {
  __typename?: 'Api_Education_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Education_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Education_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Education_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Education_ListOutput = {
  __typename?: 'Api_Education_listOutput';
  data?: Maybe<Array<Maybe<Api_Education_ListOutputData>>>;
  page?: Maybe<Api_Education_ListOutputPage>;
};

export type Api_Education_ListOutputData = {
  __typename?: 'Api_Education_listOutputData';
  achievement?: Maybe<Scalars['String']['output']>;
  dateOfAchievement?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Api_Education_ListOutputPage = {
  __typename?: 'Api_Education_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Education_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Education_ListOutputPageRange = {
  __typename?: 'Api_Education_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Education_UpdateOutput = {
  __typename?: 'Api_Education_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Event_AggregateOutput = {
  __typename?: 'Api_Event_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Event_AggregateOutputBreakdown>>>;
};

export type Api_Event_AggregateOutputBreakdown = {
  __typename?: 'Api_Event_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Event_CreateOutput = {
  __typename?: 'Api_Event_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Event_DeleteOutput = {
  __typename?: 'Api_Event_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Event_GetOutput = {
  __typename?: 'Api_Event_getOutput';
  data?: Maybe<Api_Event_GetOutputData>;
};

export type Api_Event_GetOutputData = {
  __typename?: 'Api_Event_getOutputData';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Event_GroupByOutput = {
  __typename?: 'Api_Event_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Event_GroupByOutputBreakdown>>>;
};

export type Api_Event_GroupByOutputBreakdown = {
  __typename?: 'Api_Event_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Event_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Event_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Event_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Event_ListOutput = {
  __typename?: 'Api_Event_listOutput';
  data?: Maybe<Array<Maybe<Api_Event_ListOutputData>>>;
  page?: Maybe<Api_Event_ListOutputPage>;
};

export type Api_Event_ListOutputData = {
  __typename?: 'Api_Event_listOutputData';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Event_ListOutputPage = {
  __typename?: 'Api_Event_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Event_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Event_ListOutputPageRange = {
  __typename?: 'Api_Event_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Event_UpdateOutput = {
  __typename?: 'Api_Event_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_File_CreateOutput = {
  __typename?: 'Api_File_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_File_DeleteOutput = {
  __typename?: 'Api_File_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_File_GetOutput = {
  __typename?: 'Api_File_getOutput';
  data?: Maybe<Api_File_GetOutputData>;
};

export type Api_File_GetOutputData = {
  __typename?: 'Api_File_getOutputData';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_File_ListOutput = {
  __typename?: 'Api_File_listOutput';
  data?: Maybe<Array<Maybe<Api_File_ListOutputData>>>;
  page?: Maybe<Api_File_ListOutputPage>;
};

export type Api_File_ListOutputData = {
  __typename?: 'Api_File_listOutputData';
  assignedTo?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  mime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Api_File_ListOutputPage = {
  __typename?: 'Api_File_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_File_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_File_ListOutputPageRange = {
  __typename?: 'Api_File_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_File_UpdateOutput = {
  __typename?: 'Api_File_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_InvoiceBatch_CreateOutput = {
  __typename?: 'Api_InvoiceBatch_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_InvoiceBatch_DeleteOutput = {
  __typename?: 'Api_InvoiceBatch_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_InvoiceBatch_GetOutput = {
  __typename?: 'Api_InvoiceBatch_getOutput';
  data?: Maybe<Api_InvoiceBatch_GetOutputData>;
};

export type Api_InvoiceBatch_GetOutputData = {
  __typename?: 'Api_InvoiceBatch_getOutputData';
  batchID?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOpen?: Maybe<Scalars['Boolean']['output']>;
};

export type Api_InvoiceBatch_ListOutput = {
  __typename?: 'Api_InvoiceBatch_listOutput';
  data?: Maybe<Array<Maybe<Api_InvoiceBatch_ListOutputData>>>;
  page?: Maybe<Api_InvoiceBatch_ListOutputPage>;
};

export type Api_InvoiceBatch_ListOutputData = {
  __typename?: 'Api_InvoiceBatch_listOutputData';
  batchID?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOpen?: Maybe<Scalars['Boolean']['output']>;
};

export type Api_InvoiceBatch_ListOutputPage = {
  __typename?: 'Api_InvoiceBatch_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_InvoiceBatch_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_InvoiceBatch_ListOutputPageRange = {
  __typename?: 'Api_InvoiceBatch_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_InvoiceBatch_UpdateOutput = {
  __typename?: 'Api_InvoiceBatch_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Invoice_AggregateOutput = {
  __typename?: 'Api_Invoice_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Invoice_AggregateOutputBreakdown>>>;
};

export type Api_Invoice_AggregateOutputBreakdown = {
  __typename?: 'Api_Invoice_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Invoice_CreateOutput = {
  __typename?: 'Api_Invoice_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Invoice_DeleteOutput = {
  __typename?: 'Api_Invoice_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Invoice_GetOutput = {
  __typename?: 'Api_Invoice_getOutput';
  data?: Maybe<Api_Invoice_GetOutputData>;
};

export type Api_Invoice_GetOutputData = {
  __typename?: 'Api_Invoice_getOutputData';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Api_Invoice_GetOutputDataItems>>>;
  paidAt?: Maybe<Scalars['String']['output']>;
  paymentLink?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Invoice_GetOutputDataItems = {
  __typename?: 'Api_Invoice_getOutputDataItems';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
};

export type Api_Invoice_GroupByOutput = {
  __typename?: 'Api_Invoice_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Invoice_GroupByOutputBreakdown>>>;
};

export type Api_Invoice_GroupByOutputBreakdown = {
  __typename?: 'Api_Invoice_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Invoice_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Invoice_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Invoice_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Invoice_ListOutput = {
  __typename?: 'Api_Invoice_listOutput';
  data?: Maybe<Array<Maybe<Api_Invoice_ListOutputData>>>;
  page?: Maybe<Api_Invoice_ListOutputPage>;
};

export type Api_Invoice_ListOutputData = {
  __typename?: 'Api_Invoice_listOutputData';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Api_Invoice_ListOutputDataItems>>>;
  paidAt?: Maybe<Scalars['String']['output']>;
  paymentLink?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Invoice_ListOutputDataItems = {
  __typename?: 'Api_Invoice_listOutputDataItems';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
};

export type Api_Invoice_ListOutputPage = {
  __typename?: 'Api_Invoice_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Invoice_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Invoice_ListOutputPageRange = {
  __typename?: 'Api_Invoice_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Invoice_UpdateOutput = {
  __typename?: 'Api_Invoice_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Member_AggregateOutput = {
  __typename?: 'Api_Member_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Member_AggregateOutputBreakdown>>>;
};

export type Api_Member_AggregateOutputBreakdown = {
  __typename?: 'Api_Member_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_CreateOutput = {
  __typename?: 'Api_Member_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Member_DeleteOutput = {
  __typename?: 'Api_Member_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Member_GetOutput = {
  __typename?: 'Api_Member_getOutput';
  data?: Maybe<Api_Member_GetOutputData>;
};

export type Api_Member_GetOutputData = {
  __typename?: 'Api_Member_getOutputData';
  about?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  business_addressLine1?: Maybe<Scalars['String']['output']>;
  business_addressLine2?: Maybe<Scalars['String']['output']>;
  business_city?: Maybe<Scalars['String']['output']>;
  business_country?: Maybe<Scalars['String']['output']>;
  business_phoneNumber?: Maybe<Scalars['String']['output']>;
  business_postalCode?: Maybe<Scalars['String']['output']>;
  business_state?: Maybe<Scalars['String']['output']>;
  cell_phoneNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  dental_degree?: Maybe<Scalars['String']['output']>;
  dental_graduationYear?: Maybe<Scalars['String']['output']>;
  dental_school?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  effectiveDate?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['String']['output']>;
  home_addressLine1?: Maybe<Scalars['String']['output']>;
  home_addressLine2?: Maybe<Scalars['String']['output']>;
  home_city?: Maybe<Scalars['String']['output']>;
  home_country?: Maybe<Scalars['String']['output']>;
  home_phoneNumber?: Maybe<Scalars['String']['output']>;
  home_postalCode?: Maybe<Scalars['String']['output']>;
  home_state?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isBlacklisted?: Maybe<Scalars['Boolean']['output']>;
  joinDate?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  memberPackage?: Maybe<Scalars['String']['output']>;
  memberType?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ortho_degree?: Maybe<Scalars['String']['output']>;
  ortho_graduationYear?: Maybe<Scalars['String']['output']>;
  ortho_school?: Maybe<Scalars['String']['output']>;
  postgraduate_degree?: Maybe<Scalars['String']['output']>;
  postgraduate_graduationYear?: Maybe<Scalars['String']['output']>;
  postgraduate_school?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  rejoinDate?: Maybe<Scalars['String']['output']>;
  society?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_GroupByOutput = {
  __typename?: 'Api_Member_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Member_GroupByOutputBreakdown>>>;
};

export type Api_Member_GroupByOutputBreakdown = {
  __typename?: 'Api_Member_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Member_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Member_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_ListOutput = {
  __typename?: 'Api_Member_listOutput';
  data?: Maybe<Array<Maybe<Api_Member_ListOutputData>>>;
  page?: Maybe<Api_Member_ListOutputPage>;
};

export type Api_Member_ListOutputData = {
  __typename?: 'Api_Member_listOutputData';
  about?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  business_addressLine1?: Maybe<Scalars['String']['output']>;
  business_addressLine2?: Maybe<Scalars['String']['output']>;
  business_city?: Maybe<Scalars['String']['output']>;
  business_country?: Maybe<Scalars['String']['output']>;
  business_phoneNumber?: Maybe<Scalars['String']['output']>;
  business_postalCode?: Maybe<Scalars['String']['output']>;
  business_state?: Maybe<Scalars['String']['output']>;
  cell_phoneNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  dental_degree?: Maybe<Scalars['String']['output']>;
  dental_graduationYear?: Maybe<Scalars['String']['output']>;
  dental_school?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  effectiveDate?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['String']['output']>;
  home_addressLine1?: Maybe<Scalars['String']['output']>;
  home_addressLine2?: Maybe<Scalars['String']['output']>;
  home_city?: Maybe<Scalars['String']['output']>;
  home_country?: Maybe<Scalars['String']['output']>;
  home_phoneNumber?: Maybe<Scalars['String']['output']>;
  home_postalCode?: Maybe<Scalars['String']['output']>;
  home_state?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isBlacklisted?: Maybe<Scalars['Boolean']['output']>;
  joinDate?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  memberPackage?: Maybe<Scalars['String']['output']>;
  memberType?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ortho_degree?: Maybe<Scalars['String']['output']>;
  ortho_graduationYear?: Maybe<Scalars['String']['output']>;
  ortho_school?: Maybe<Scalars['String']['output']>;
  postgraduate_degree?: Maybe<Scalars['String']['output']>;
  postgraduate_graduationYear?: Maybe<Scalars['String']['output']>;
  postgraduate_school?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  rejoinDate?: Maybe<Scalars['String']['output']>;
  society?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_ListOutputPage = {
  __typename?: 'Api_Member_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Member_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Member_ListOutputPageRange = {
  __typename?: 'Api_Member_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Member_UpdateOutput = {
  __typename?: 'Api_Member_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Note_CreateOutput = {
  __typename?: 'Api_Note_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Note_DeleteOutput = {
  __typename?: 'Api_Note_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Note_GetOutput = {
  __typename?: 'Api_Note_getOutput';
  data?: Maybe<Api_Note_GetOutputData>;
};

export type Api_Note_GetOutputData = {
  __typename?: 'Api_Note_getOutputData';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Api_Note_ListOutput = {
  __typename?: 'Api_Note_listOutput';
  data?: Maybe<Array<Maybe<Api_Note_ListOutputData>>>;
  page?: Maybe<Api_Note_ListOutputPage>;
};

export type Api_Note_ListOutputData = {
  __typename?: 'Api_Note_listOutputData';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Api_Note_ListOutputPage = {
  __typename?: 'Api_Note_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Note_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Note_ListOutputPageRange = {
  __typename?: 'Api_Note_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Note_UpdateOutput = {
  __typename?: 'Api_Note_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_ProductFulfillment_AggregateOutput = {
  __typename?: 'Api_ProductFulfillment_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_ProductFulfillment_AggregateOutputBreakdown>>>;
};

export type Api_ProductFulfillment_AggregateOutputBreakdown = {
  __typename?: 'Api_ProductFulfillment_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_ProductFulfillment_CreateOutput = {
  __typename?: 'Api_ProductFulfillment_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_ProductFulfillment_DeleteOutput = {
  __typename?: 'Api_ProductFulfillment_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_ProductFulfillment_GetOutput = {
  __typename?: 'Api_ProductFulfillment_getOutput';
  data?: Maybe<Api_ProductFulfillment_GetOutputData>;
};

export type Api_ProductFulfillment_GetOutputData = {
  __typename?: 'Api_ProductFulfillment_getOutputData';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  returnedCancelled?: Maybe<Scalars['Boolean']['output']>;
  returnedCancelledAt?: Maybe<Scalars['String']['output']>;
  shipped?: Maybe<Scalars['Boolean']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_ProductFulfillment_GroupByOutput = {
  __typename?: 'Api_ProductFulfillment_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_ProductFulfillment_GroupByOutputBreakdown>>>;
};

export type Api_ProductFulfillment_GroupByOutputBreakdown = {
  __typename?: 'Api_ProductFulfillment_groupByOutputBreakdown';
  counts: Array<Maybe<Api_ProductFulfillment_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_ProductFulfillment_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_ProductFulfillment_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_ProductFulfillment_ListOutput = {
  __typename?: 'Api_ProductFulfillment_listOutput';
  data?: Maybe<Array<Maybe<Api_ProductFulfillment_ListOutputData>>>;
  page?: Maybe<Api_ProductFulfillment_ListOutputPage>;
};

export type Api_ProductFulfillment_ListOutputData = {
  __typename?: 'Api_ProductFulfillment_listOutputData';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  returnedCancelled?: Maybe<Scalars['Boolean']['output']>;
  returnedCancelledAt?: Maybe<Scalars['String']['output']>;
  shipped?: Maybe<Scalars['Boolean']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_ProductFulfillment_ListOutputPage = {
  __typename?: 'Api_ProductFulfillment_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_ProductFulfillment_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_ProductFulfillment_ListOutputPageRange = {
  __typename?: 'Api_ProductFulfillment_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_ProductFulfillment_UpdateOutput = {
  __typename?: 'Api_ProductFulfillment_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_ServicePurchase_AggregateOutput = {
  __typename?: 'Api_ServicePurchase_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_ServicePurchase_AggregateOutputBreakdown>>>;
};

export type Api_ServicePurchase_AggregateOutputBreakdown = {
  __typename?: 'Api_ServicePurchase_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_ServicePurchase_CreateOutput = {
  __typename?: 'Api_ServicePurchase_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_ServicePurchase_DeleteOutput = {
  __typename?: 'Api_ServicePurchase_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_ServicePurchase_GetOutput = {
  __typename?: 'Api_ServicePurchase_getOutput';
  data?: Maybe<Api_ServicePurchase_GetOutputData>;
};

export type Api_ServicePurchase_GetOutputData = {
  __typename?: 'Api_ServicePurchase_getOutputData';
  balanceDue?: Maybe<Scalars['Float']['output']>;
  cancelled?: Maybe<Scalars['Boolean']['output']>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Api_ServicePurchase_GroupByOutput = {
  __typename?: 'Api_ServicePurchase_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_ServicePurchase_GroupByOutputBreakdown>>>;
};

export type Api_ServicePurchase_GroupByOutputBreakdown = {
  __typename?: 'Api_ServicePurchase_groupByOutputBreakdown';
  counts: Array<Maybe<Api_ServicePurchase_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_ServicePurchase_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_ServicePurchase_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_ServicePurchase_ListOutput = {
  __typename?: 'Api_ServicePurchase_listOutput';
  data?: Maybe<Array<Maybe<Api_ServicePurchase_ListOutputData>>>;
  page?: Maybe<Api_ServicePurchase_ListOutputPage>;
};

export type Api_ServicePurchase_ListOutputData = {
  __typename?: 'Api_ServicePurchase_listOutputData';
  balanceDue?: Maybe<Scalars['Float']['output']>;
  cancelled?: Maybe<Scalars['Boolean']['output']>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Api_ServicePurchase_ListOutputPage = {
  __typename?: 'Api_ServicePurchase_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_ServicePurchase_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_ServicePurchase_ListOutputPageRange = {
  __typename?: 'Api_ServicePurchase_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_ServicePurchase_UpdateOutput = {
  __typename?: 'Api_ServicePurchase_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Society_CreateOutput = {
  __typename?: 'Api_Society_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Society_DeleteOutput = {
  __typename?: 'Api_Society_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Society_GetOutput = {
  __typename?: 'Api_Society_getOutput';
  data?: Maybe<Api_Society_GetOutputData>;
};

export type Api_Society_GetOutputData = {
  __typename?: 'Api_Society_getOutputData';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Society_ListOutput = {
  __typename?: 'Api_Society_listOutput';
  data?: Maybe<Array<Maybe<Api_Society_ListOutputData>>>;
  page?: Maybe<Api_Society_ListOutputPage>;
};

export type Api_Society_ListOutputData = {
  __typename?: 'Api_Society_listOutputData';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Society_ListOutputPage = {
  __typename?: 'Api_Society_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Society_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Society_ListOutputPageRange = {
  __typename?: 'Api_Society_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Society_UpdateOutput = {
  __typename?: 'Api_Society_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Sync_Crm_NetforumOutput = {
  __typename?: 'Api_Sync_crm_netforumOutput';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Api_Sync_Crm_WordpressOutput = {
  __typename?: 'Api_Sync_crm_wordpressOutput';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Api_Sync_From_NetforumOutput = {
  __typename?: 'Api_Sync_from_netforumOutput';
  count?: Maybe<Scalars['Float']['output']>;
};

export type Api_Sync_From_WordpressOutput = {
  __typename?: 'Api_Sync_from_wordpressOutput';
  count?: Maybe<Scalars['Float']['output']>;
};

export type Api_TimecheckOutput = {
  __typename?: 'Api_TimecheckOutput';
  time?: Maybe<Scalars['String']['output']>;
};

export type Api_Wpportaluser_GetOutput = {
  __typename?: 'Api_Wpportaluser_getOutput';
  data?: Maybe<Api_Wpportaluser_GetOutputData>;
};

export type Api_Wpportaluser_GetOutputData = {
  __typename?: 'Api_Wpportaluser_getOutputData';
  avatar_url?: Maybe<Scalars['String']['output']>;
  courses?: Maybe<Array<Maybe<Api_Wpportaluser_GetOutputDataCourses>>>;
  courses_count?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  profile_fields?: Maybe<Array<Maybe<Api_Wpportaluser_GetOutputDataProfile_Fields>>>;
  registered_date?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type Api_Wpportaluser_GetOutputDataCourses = {
  __typename?: 'Api_Wpportaluser_getOutputDataCourses';
  completed_steps?: Maybe<Scalars['Float']['output']>;
  completion_date?: Maybe<Scalars['String']['output']>;
  course_id?: Maybe<Scalars['Float']['output']>;
  enrollment_date?: Maybe<Scalars['String']['output']>;
  progress_percentage?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total_steps?: Maybe<Scalars['Float']['output']>;
};

export type Api_Wpportaluser_GetOutputDataProfile_Fields = {
  __typename?: 'Api_Wpportaluser_getOutputDataProfile_fields';
  field_id?: Maybe<Scalars['String']['output']>;
  field_type?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Api_Wpportaluser_ListOutput = {
  __typename?: 'Api_Wpportaluser_listOutput';
  data?: Maybe<Array<Maybe<Api_Wpportaluser_ListOutputData>>>;
  page?: Maybe<Api_Wpportaluser_ListOutputPage>;
};

export type Api_Wpportaluser_ListOutputData = {
  __typename?: 'Api_Wpportaluser_listOutputData';
  avatar_url?: Maybe<Scalars['String']['output']>;
  courses?: Maybe<Array<Maybe<Api_Wpportaluser_ListOutputDataCourses>>>;
  courses_count?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  profile_fields?: Maybe<Array<Maybe<Api_Wpportaluser_ListOutputDataProfile_Fields>>>;
  registered_date?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type Api_Wpportaluser_ListOutputDataCourses = {
  __typename?: 'Api_Wpportaluser_listOutputDataCourses';
  completed_steps?: Maybe<Scalars['Float']['output']>;
  completion_date?: Maybe<Scalars['String']['output']>;
  course_id?: Maybe<Scalars['Float']['output']>;
  enrollment_date?: Maybe<Scalars['String']['output']>;
  progress_percentage?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total_steps?: Maybe<Scalars['Float']['output']>;
};

export type Api_Wpportaluser_ListOutputDataProfile_Fields = {
  __typename?: 'Api_Wpportaluser_listOutputDataProfile_fields';
  field_id?: Maybe<Scalars['String']['output']>;
  field_type?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Api_Wpportaluser_ListOutputPage = {
  __typename?: 'Api_Wpportaluser_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Wpportaluser_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Wpportaluser_ListOutputPageRange = {
  __typename?: 'Api_Wpportaluser_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Application_CreateInput = {
  data: Api_Application_CreateInputData;
};

export type Api_Application_CreateInputData = {
  data: Array<InputMaybe<Api_Application_CreateInputDataData>>;
};

export type Api_Application_CreateInputDataData = {
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  society?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Application_DeleteInput = {
  data: Api_Application_DeleteInputData;
};

export type Api_Application_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Application_GetInput = {
  data: Api_Application_GetInputData;
};

export type Api_Application_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Application_ListInput = {
  data: Api_Application_ListInputData;
};

export type Api_Application_ListInputData = {
  page?: InputMaybe<Api_Application_ListInputDataPage>;
};

export type Api_Application_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Application_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Application_ListInputDataPageSort>;
};

export type Api_Application_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Application_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Application_UpdateInput = {
  data: Api_Application_UpdateInputData;
};

export type Api_Application_UpdateInputData = {
  data: Array<InputMaybe<Api_Application_UpdateInputDataData>>;
};

export type Api_Application_UpdateInputDataData = {
  data: Api_Application_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Application_UpdateInputDataDataData = {
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  society?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Education_AggregateInput = {
  data: Api_Education_AggregateInputData;
};

export type Api_Education_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Education_AggregateInputDataPage>;
};

export type Api_Education_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Education_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Education_AggregateInputDataPageSort>;
};

export type Api_Education_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Education_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Education_CreateInput = {
  data: Api_Education_CreateInputData;
};

export type Api_Education_CreateInputData = {
  data: Array<InputMaybe<Api_Education_CreateInputDataData>>;
};

export type Api_Education_CreateInputDataData = {
  achievement: Scalars['String']['input'];
  courseID?: InputMaybe<Scalars['String']['input']>;
  dateOfAchievement: Scalars['String']['input'];
  schoolName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Api_Education_DeleteInput = {
  data: Api_Education_DeleteInputData;
};

export type Api_Education_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Education_GetInput = {
  data: Api_Education_GetInputData;
};

export type Api_Education_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Education_GroupByInput = {
  data: Api_Education_GroupByInputData;
};

export type Api_Education_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Education_GroupByInputDataPage>;
};

export type Api_Education_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Education_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Education_GroupByInputDataPageSort>;
};

export type Api_Education_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Education_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Education_ListInput = {
  data: Api_Education_ListInputData;
};

export type Api_Education_ListInputData = {
  page?: InputMaybe<Api_Education_ListInputDataPage>;
};

export type Api_Education_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Education_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Education_ListInputDataPageSort>;
};

export type Api_Education_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Education_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Education_UpdateInput = {
  data: Api_Education_UpdateInputData;
};

export type Api_Education_UpdateInputData = {
  data: Array<InputMaybe<Api_Education_UpdateInputDataData>>;
};

export type Api_Education_UpdateInputDataData = {
  data: Api_Education_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Education_UpdateInputDataDataData = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  courseID?: InputMaybe<Scalars['String']['input']>;
  dateOfAchievement?: InputMaybe<Scalars['String']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Event_AggregateInput = {
  data: Api_Event_AggregateInputData;
};

export type Api_Event_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Event_AggregateInputDataPage>;
};

export type Api_Event_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Event_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Event_AggregateInputDataPageSort>;
};

export type Api_Event_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Event_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Event_CreateInput = {
  data: Api_Event_CreateInputData;
};

export type Api_Event_CreateInputData = {
  data: Array<InputMaybe<Api_Event_CreateInputDataData>>;
};

export type Api_Event_CreateInputDataData = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Event_DeleteInput = {
  data: Api_Event_DeleteInputData;
};

export type Api_Event_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Event_GetInput = {
  data: Api_Event_GetInputData;
};

export type Api_Event_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Event_GroupByInput = {
  data: Api_Event_GroupByInputData;
};

export type Api_Event_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Event_GroupByInputDataPage>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Event_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Event_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Event_GroupByInputDataPageSort>;
};

export type Api_Event_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Event_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Event_ListInput = {
  data: Api_Event_ListInputData;
};

export type Api_Event_ListInputData = {
  page?: InputMaybe<Api_Event_ListInputDataPage>;
};

export type Api_Event_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Event_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Event_ListInputDataPageSort>;
};

export type Api_Event_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Event_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Event_UpdateInput = {
  data: Api_Event_UpdateInputData;
};

export type Api_Event_UpdateInputData = {
  data: Array<InputMaybe<Api_Event_UpdateInputDataData>>;
};

export type Api_Event_UpdateInputDataData = {
  data: Api_Event_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Event_UpdateInputDataDataData = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Api_File_CreateInput = {
  data: Api_File_CreateInputData;
};

export type Api_File_CreateInputData = {
  data: Array<InputMaybe<Api_File_CreateInputDataData>>;
};

export type Api_File_CreateInputDataData = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Api_File_DeleteInput = {
  data: Api_File_DeleteInputData;
};

export type Api_File_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_File_GetInput = {
  data: Api_File_GetInputData;
};

export type Api_File_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_File_ListInput = {
  data: Api_File_ListInputData;
};

export type Api_File_ListInputData = {
  page?: InputMaybe<Api_File_ListInputDataPage>;
};

export type Api_File_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_File_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_File_ListInputDataPageSort>;
};

export type Api_File_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_File_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_File_UpdateInput = {
  data: Api_File_UpdateInputData;
};

export type Api_File_UpdateInputData = {
  data: Array<InputMaybe<Api_File_UpdateInputDataData>>;
};

export type Api_File_UpdateInputDataData = {
  data: Api_File_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_File_UpdateInputDataDataData = {
  category?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Api_InvoiceBatch_CreateInput = {
  data: Api_InvoiceBatch_CreateInputData;
};

export type Api_InvoiceBatch_CreateInputData = {
  data: Array<InputMaybe<Api_InvoiceBatch_CreateInputDataData>>;
};

export type Api_InvoiceBatch_CreateInputDataData = {
  batchID?: InputMaybe<Scalars['String']['input']>;
  closedAt?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Api_InvoiceBatch_DeleteInput = {
  data: Api_InvoiceBatch_DeleteInputData;
};

export type Api_InvoiceBatch_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_InvoiceBatch_GetInput = {
  data: Api_InvoiceBatch_GetInputData;
};

export type Api_InvoiceBatch_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_InvoiceBatch_ListInput = {
  data: Api_InvoiceBatch_ListInputData;
};

export type Api_InvoiceBatch_ListInputData = {
  page?: InputMaybe<Api_InvoiceBatch_ListInputDataPage>;
};

export type Api_InvoiceBatch_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_InvoiceBatch_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_InvoiceBatch_ListInputDataPageSort>;
};

export type Api_InvoiceBatch_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_InvoiceBatch_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_InvoiceBatch_UpdateInput = {
  data: Api_InvoiceBatch_UpdateInputData;
};

export type Api_InvoiceBatch_UpdateInputData = {
  data: Array<InputMaybe<Api_InvoiceBatch_UpdateInputDataData>>;
};

export type Api_InvoiceBatch_UpdateInputDataData = {
  data: Api_InvoiceBatch_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_InvoiceBatch_UpdateInputDataDataData = {
  batchID?: InputMaybe<Scalars['String']['input']>;
  closedAt?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Api_Invoice_AggregateInput = {
  data: Api_Invoice_AggregateInputData;
};

export type Api_Invoice_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Invoice_AggregateInputDataPage>;
};

export type Api_Invoice_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Invoice_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Invoice_AggregateInputDataPageSort>;
};

export type Api_Invoice_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Invoice_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Invoice_CreateInput = {
  data: Api_Invoice_CreateInputData;
};

export type Api_Invoice_CreateInputData = {
  data: Array<InputMaybe<Api_Invoice_CreateInputDataData>>;
};

export type Api_Invoice_CreateInputDataData = {
  customerName?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Api_Invoice_CreateInputDataDataItems>>>;
  paymentLink?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type Api_Invoice_CreateInputDataDataItems = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

export type Api_Invoice_DeleteInput = {
  data: Api_Invoice_DeleteInputData;
};

export type Api_Invoice_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Invoice_GetInput = {
  data: Api_Invoice_GetInputData;
};

export type Api_Invoice_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Invoice_GroupByInput = {
  data: Api_Invoice_GroupByInputData;
};

export type Api_Invoice_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Invoice_GroupByInputDataPage>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Invoice_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Invoice_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Invoice_GroupByInputDataPageSort>;
};

export type Api_Invoice_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Invoice_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Invoice_ListInput = {
  data: Api_Invoice_ListInputData;
};

export type Api_Invoice_ListInputData = {
  page?: InputMaybe<Api_Invoice_ListInputDataPage>;
};

export type Api_Invoice_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Invoice_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Invoice_ListInputDataPageSort>;
};

export type Api_Invoice_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Invoice_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Invoice_UpdateInput = {
  data: Api_Invoice_UpdateInputData;
};

export type Api_Invoice_UpdateInputData = {
  data: Array<InputMaybe<Api_Invoice_UpdateInputDataData>>;
};

export type Api_Invoice_UpdateInputDataData = {
  data: Api_Invoice_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Invoice_UpdateInputDataDataData = {
  customerName?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Api_Invoice_UpdateInputDataDataDataItems>>>;
  paidAt?: InputMaybe<Scalars['String']['input']>;
  paymentLink?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type Api_Invoice_UpdateInputDataDataDataItems = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

export type Api_Member_AggregateInput = {
  data: Api_Member_AggregateInputData;
};

export type Api_Member_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Member_AggregateInputDataPage>;
};

export type Api_Member_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Member_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Member_AggregateInputDataPageSort>;
};

export type Api_Member_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Member_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Member_CreateInput = {
  data: Api_Member_CreateInputData;
};

export type Api_Member_CreateInputData = {
  data: Array<InputMaybe<Api_Member_CreateInputDataData>>;
};

export type Api_Member_CreateInputDataData = {
  about?: InputMaybe<Scalars['String']['input']>;
  business_addressLine1?: InputMaybe<Scalars['String']['input']>;
  business_addressLine2?: InputMaybe<Scalars['String']['input']>;
  business_city?: InputMaybe<Scalars['String']['input']>;
  business_country?: InputMaybe<Scalars['String']['input']>;
  business_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  business_postalCode?: InputMaybe<Scalars['String']['input']>;
  business_state?: InputMaybe<Scalars['String']['input']>;
  cell_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  dental_degree?: InputMaybe<Scalars['String']['input']>;
  dental_graduationYear?: InputMaybe<Scalars['String']['input']>;
  dental_school?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  expirationDate?: InputMaybe<Scalars['String']['input']>;
  home_addressLine1?: InputMaybe<Scalars['String']['input']>;
  home_addressLine2?: InputMaybe<Scalars['String']['input']>;
  home_city?: InputMaybe<Scalars['String']['input']>;
  home_country?: InputMaybe<Scalars['String']['input']>;
  home_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  home_postalCode?: InputMaybe<Scalars['String']['input']>;
  home_state?: InputMaybe<Scalars['String']['input']>;
  isBlacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  joinDate?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  memberPackage?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ortho_degree?: InputMaybe<Scalars['String']['input']>;
  ortho_graduationYear?: InputMaybe<Scalars['String']['input']>;
  ortho_school?: InputMaybe<Scalars['String']['input']>;
  postgraduate_degree?: InputMaybe<Scalars['String']['input']>;
  postgraduate_graduationYear?: InputMaybe<Scalars['String']['input']>;
  postgraduate_school?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  rejoinDate?: InputMaybe<Scalars['String']['input']>;
  society?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Member_DeleteInput = {
  data: Api_Member_DeleteInputData;
};

export type Api_Member_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Member_GetInput = {
  data: Api_Member_GetInputData;
};

export type Api_Member_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Member_GroupByInput = {
  data: Api_Member_GroupByInputData;
};

export type Api_Member_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Member_GroupByInputDataPage>;
};

export type Api_Member_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Member_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Member_GroupByInputDataPageSort>;
};

export type Api_Member_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Member_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Member_ListInput = {
  data: Api_Member_ListInputData;
};

export type Api_Member_ListInputData = {
  page?: InputMaybe<Api_Member_ListInputDataPage>;
};

export type Api_Member_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Member_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Member_ListInputDataPageSort>;
};

export type Api_Member_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Member_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Member_UpdateInput = {
  data: Api_Member_UpdateInputData;
};

export type Api_Member_UpdateInputData = {
  data: Array<InputMaybe<Api_Member_UpdateInputDataData>>;
};

export type Api_Member_UpdateInputDataData = {
  data: Api_Member_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Member_UpdateInputDataDataData = {
  about?: InputMaybe<Scalars['String']['input']>;
  business_addressLine1?: InputMaybe<Scalars['String']['input']>;
  business_addressLine2?: InputMaybe<Scalars['String']['input']>;
  business_city?: InputMaybe<Scalars['String']['input']>;
  business_country?: InputMaybe<Scalars['String']['input']>;
  business_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  business_postalCode?: InputMaybe<Scalars['String']['input']>;
  business_state?: InputMaybe<Scalars['String']['input']>;
  cell_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  dental_degree?: InputMaybe<Scalars['String']['input']>;
  dental_graduationYear?: InputMaybe<Scalars['String']['input']>;
  dental_school?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expirationDate?: InputMaybe<Scalars['String']['input']>;
  home_addressLine1?: InputMaybe<Scalars['String']['input']>;
  home_addressLine2?: InputMaybe<Scalars['String']['input']>;
  home_city?: InputMaybe<Scalars['String']['input']>;
  home_country?: InputMaybe<Scalars['String']['input']>;
  home_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  home_postalCode?: InputMaybe<Scalars['String']['input']>;
  home_state?: InputMaybe<Scalars['String']['input']>;
  isBlacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  joinDate?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  memberPackage?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ortho_degree?: InputMaybe<Scalars['String']['input']>;
  ortho_graduationYear?: InputMaybe<Scalars['String']['input']>;
  ortho_school?: InputMaybe<Scalars['String']['input']>;
  postgraduate_degree?: InputMaybe<Scalars['String']['input']>;
  postgraduate_graduationYear?: InputMaybe<Scalars['String']['input']>;
  postgraduate_school?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  rejoinDate?: InputMaybe<Scalars['String']['input']>;
  society?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Note_CreateInput = {
  data: Api_Note_CreateInputData;
};

export type Api_Note_CreateInputData = {
  data: Array<InputMaybe<Api_Note_CreateInputDataData>>;
};

export type Api_Note_CreateInputDataData = {
  content: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Note_DeleteInput = {
  data: Api_Note_DeleteInputData;
};

export type Api_Note_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Note_GetInput = {
  data: Api_Note_GetInputData;
};

export type Api_Note_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Note_ListInput = {
  data: Api_Note_ListInputData;
};

export type Api_Note_ListInputData = {
  page?: InputMaybe<Api_Note_ListInputDataPage>;
};

export type Api_Note_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Note_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Note_ListInputDataPageSort>;
};

export type Api_Note_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Note_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Note_UpdateInput = {
  data: Api_Note_UpdateInputData;
};

export type Api_Note_UpdateInputData = {
  data: Array<InputMaybe<Api_Note_UpdateInputDataData>>;
};

export type Api_Note_UpdateInputDataData = {
  data: Api_Note_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Note_UpdateInputDataDataData = {
  content?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_ProductFulfillment_AggregateInput = {
  data: Api_ProductFulfillment_AggregateInputData;
};

export type Api_ProductFulfillment_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_ProductFulfillment_AggregateInputDataPage>;
};

export type Api_ProductFulfillment_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_ProductFulfillment_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_ProductFulfillment_AggregateInputDataPageSort>;
};

export type Api_ProductFulfillment_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_ProductFulfillment_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_ProductFulfillment_CreateInput = {
  data: Api_ProductFulfillment_CreateInputData;
};

export type Api_ProductFulfillment_CreateInputData = {
  data: Array<InputMaybe<Api_ProductFulfillment_CreateInputDataData>>;
};

export type Api_ProductFulfillment_CreateInputDataData = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  returnedCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  returnedCancelledAt?: InputMaybe<Scalars['String']['input']>;
  shipped?: InputMaybe<Scalars['Boolean']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type Api_ProductFulfillment_DeleteInput = {
  data: Api_ProductFulfillment_DeleteInputData;
};

export type Api_ProductFulfillment_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_ProductFulfillment_GetInput = {
  data: Api_ProductFulfillment_GetInputData;
};

export type Api_ProductFulfillment_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_ProductFulfillment_GroupByInput = {
  data: Api_ProductFulfillment_GroupByInputData;
};

export type Api_ProductFulfillment_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_ProductFulfillment_GroupByInputDataPage>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_ProductFulfillment_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_ProductFulfillment_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_ProductFulfillment_GroupByInputDataPageSort>;
};

export type Api_ProductFulfillment_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_ProductFulfillment_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_ProductFulfillment_ListInput = {
  data: Api_ProductFulfillment_ListInputData;
};

export type Api_ProductFulfillment_ListInputData = {
  page?: InputMaybe<Api_ProductFulfillment_ListInputDataPage>;
};

export type Api_ProductFulfillment_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_ProductFulfillment_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_ProductFulfillment_ListInputDataPageSort>;
};

export type Api_ProductFulfillment_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_ProductFulfillment_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_ProductFulfillment_UpdateInput = {
  data: Api_ProductFulfillment_UpdateInputData;
};

export type Api_ProductFulfillment_UpdateInputData = {
  data: Array<InputMaybe<Api_ProductFulfillment_UpdateInputDataData>>;
};

export type Api_ProductFulfillment_UpdateInputDataData = {
  data: Api_ProductFulfillment_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_ProductFulfillment_UpdateInputDataDataData = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  returnedCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  returnedCancelledAt?: InputMaybe<Scalars['String']['input']>;
  shipped?: InputMaybe<Scalars['Boolean']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type Api_ServicePurchase_AggregateInput = {
  data: Api_ServicePurchase_AggregateInputData;
};

export type Api_ServicePurchase_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_ServicePurchase_AggregateInputDataPage>;
};

export type Api_ServicePurchase_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_ServicePurchase_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_ServicePurchase_AggregateInputDataPageSort>;
};

export type Api_ServicePurchase_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_ServicePurchase_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_ServicePurchase_CreateInput = {
  data: Api_ServicePurchase_CreateInputData;
};

export type Api_ServicePurchase_CreateInputData = {
  data: Array<InputMaybe<Api_ServicePurchase_CreateInputDataData>>;
};

export type Api_ServicePurchase_CreateInputDataData = {
  balanceDue?: InputMaybe<Scalars['Float']['input']>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelledAt?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_ServicePurchase_DeleteInput = {
  data: Api_ServicePurchase_DeleteInputData;
};

export type Api_ServicePurchase_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_ServicePurchase_GetInput = {
  data: Api_ServicePurchase_GetInputData;
};

export type Api_ServicePurchase_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_ServicePurchase_GroupByInput = {
  data: Api_ServicePurchase_GroupByInputData;
};

export type Api_ServicePurchase_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_ServicePurchase_GroupByInputDataPage>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_ServicePurchase_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_ServicePurchase_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_ServicePurchase_GroupByInputDataPageSort>;
};

export type Api_ServicePurchase_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_ServicePurchase_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_ServicePurchase_ListInput = {
  data: Api_ServicePurchase_ListInputData;
};

export type Api_ServicePurchase_ListInputData = {
  page?: InputMaybe<Api_ServicePurchase_ListInputDataPage>;
};

export type Api_ServicePurchase_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_ServicePurchase_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_ServicePurchase_ListInputDataPageSort>;
};

export type Api_ServicePurchase_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_ServicePurchase_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_ServicePurchase_UpdateInput = {
  data: Api_ServicePurchase_UpdateInputData;
};

export type Api_ServicePurchase_UpdateInputData = {
  data: Array<InputMaybe<Api_ServicePurchase_UpdateInputDataData>>;
};

export type Api_ServicePurchase_UpdateInputDataData = {
  data: Api_ServicePurchase_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_ServicePurchase_UpdateInputDataDataData = {
  balanceDue?: InputMaybe<Scalars['Float']['input']>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelledAt?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Society_CreateInput = {
  data: Api_Society_CreateInputData;
};

export type Api_Society_CreateInputData = {
  data: Array<InputMaybe<Api_Society_CreateInputDataData>>;
};

export type Api_Society_CreateInputDataData = {
  address?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Society_DeleteInput = {
  data: Api_Society_DeleteInputData;
};

export type Api_Society_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Society_GetInput = {
  data: Api_Society_GetInputData;
};

export type Api_Society_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Society_ListInput = {
  data: Api_Society_ListInputData;
};

export type Api_Society_ListInputData = {
  page?: InputMaybe<Api_Society_ListInputDataPage>;
};

export type Api_Society_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Society_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Society_ListInputDataPageSort>;
};

export type Api_Society_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Society_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Society_UpdateInput = {
  data: Api_Society_UpdateInputData;
};

export type Api_Society_UpdateInputData = {
  data: Array<InputMaybe<Api_Society_UpdateInputDataData>>;
};

export type Api_Society_UpdateInputDataData = {
  data: Api_Society_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Society_UpdateInputDataDataData = {
  address?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Sync_Crm_NetforumInput = {
  data: Api_Sync_Crm_NetforumInputData;
};

export type Api_Sync_Crm_NetforumInputData = {
  destination: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type Api_Sync_Crm_WordpressInput = {
  data: Api_Sync_Crm_WordpressInputData;
};

export type Api_Sync_Crm_WordpressInputData = {
  destination: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type Api_Sync_From_NetforumInput = {
  data: Api_Sync_From_NetforumInputData;
};

export type Api_Sync_From_NetforumInputData = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Sync_From_WordpressInput = {
  data: Api_Sync_From_WordpressInputData;
};

export type Api_Sync_From_WordpressInputData = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Api_TimecheckInput = {
  data: Api_TimecheckInputData;
};

export type Api_TimecheckInputData = {
  key: Scalars['String']['input'];
};

export type Api_Wpportaluser_GetInput = {
  data: Api_Wpportaluser_GetInputData;
};

export type Api_Wpportaluser_GetInputData = {
  dbID?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  wpID?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Wpportaluser_ListInput = {
  data: Api_Wpportaluser_ListInputData;
};

export type Api_Wpportaluser_ListInputData = {
  page?: InputMaybe<Api_Wpportaluser_ListInputDataPage>;
};

export type Api_Wpportaluser_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Wpportaluser_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Wpportaluser_ListInputDataPageSort>;
};

export type Api_Wpportaluser_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Wpportaluser_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Application = {
  __typename?: 'Application';
  applicationDate?: Maybe<Scalars['DateTime']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  memberType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  society?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApplicationCreateInput = {
  applicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  society?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ApplicationOrderByInput = {
  applicationDate?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  memberType?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  phoneNumber?: InputMaybe<OrderDirection>;
  society?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationUpdateInput = {
  applicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  society?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ApplicationWhereInput = {
  AND?: InputMaybe<Array<ApplicationWhereInput>>;
  NOT?: InputMaybe<Array<ApplicationWhereInput>>;
  OR?: InputMaybe<Array<ApplicationWhereInput>>;
  applicationDate?: InputMaybe<DateTimeNullableFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  memberType?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  society?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ApplicationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type ClientItemAuthenticationWithPasswordFailure = {
  __typename?: 'ClientItemAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type ClientItemAuthenticationWithPasswordResult = ClientItemAuthenticationWithPasswordFailure | ClientItemAuthenticationWithPasswordSuccess;

export type ClientItemAuthenticationWithPasswordSuccess = {
  __typename?: 'ClientItemAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type CreateInitialUserInput = {
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Event = {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isCancelled?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isCancelled?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type File = {
  __typename?: 'File';
  assignedTo?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  mime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileCreateInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FileOrderByInput = {
  assignedTo?: InputMaybe<OrderDirection>;
  category?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  mime?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  path?: InputMaybe<OrderDirection>;
  size?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type FileUpdateArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FileUploadOutput = {
  __typename?: 'FileUploadOutput';
  files: Array<Maybe<FileUploadOutputFiles>>;
};

export type FileUploadOutputFiles = {
  __typename?: 'FileUploadOutputFiles';
  filename: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type FileUploadUrlOutput = {
  __typename?: 'FileUploadURLOutput';
  files: Array<Maybe<FileUploadUrlOutputFiles>>;
};

export type FileUploadUrlOutputFiles = {
  __typename?: 'FileUploadURLOutputFiles';
  fileName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  uploadURL?: Maybe<Scalars['String']['output']>;
  viewURL?: Maybe<Scalars['String']['output']>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  assignedTo?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  metadata?: InputMaybe<StringFilter>;
  mime?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type File_UploadInput = {
  files: Array<InputMaybe<File_UploadInputFiles>>;
  saveToDB?: InputMaybe<Scalars['Boolean']['input']>;
};

export type File_UploadInputFiles = {
  b64: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
};

export type File_UploadUrlInput = {
  files: Array<InputMaybe<File_UploadUrlInputFiles>>;
  saveToDB?: InputMaybe<Scalars['Boolean']['input']>;
};

export type File_UploadUrlInputFiles = {
  filename: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Group = {
  __typename?: 'Group';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  groupLogo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<GroupMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type GroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};

export type GroupCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupLogo?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupGetResult = {
  __typename?: 'GroupGetResult';
  data?: Maybe<Group>;
};

export type GroupMember = {
  __typename?: 'GroupMember';
  access?: Maybe<Scalars['Int']['output']>;
  flags?: Maybe<Array<GroupMemberFlag>>;
  flagsCount?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
};


export type GroupMemberFlagsArgs = {
  cursor?: InputMaybe<GroupMemberFlagWhereUniqueInput>;
  orderBy?: Array<GroupMemberFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberFlagWhereInput;
};


export type GroupMemberFlagsCountArgs = {
  where?: GroupMemberFlagWhereInput;
};

export type GroupMemberCreateInput = {
  access?: InputMaybe<Scalars['Int']['input']>;
  flags?: InputMaybe<GroupMemberFlagRelateToManyForCreateInput>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type GroupMemberFlag = {
  __typename?: 'GroupMemberFlag';
  flag?: Maybe<Scalars['String']['output']>;
  groupMember?: Maybe<GroupMember>;
  id: Scalars['ID']['output'];
};

export type GroupMemberFlagCreateInput = {
  flag?: InputMaybe<Scalars['String']['input']>;
  groupMember?: InputMaybe<GroupMemberRelateToOneForCreateInput>;
};

export type GroupMemberFlagManyRelationFilter = {
  every?: InputMaybe<GroupMemberFlagWhereInput>;
  none?: InputMaybe<GroupMemberFlagWhereInput>;
  some?: InputMaybe<GroupMemberFlagWhereInput>;
};

export type GroupMemberFlagOrderByInput = {
  flag?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type GroupMemberFlagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberFlagCreateInput>>;
};

export type GroupMemberFlagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberFlagCreateInput>>;
  disconnect?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
};

export type GroupMemberFlagUpdateArgs = {
  data: GroupMemberFlagUpdateInput;
  where: GroupMemberFlagWhereUniqueInput;
};

export type GroupMemberFlagUpdateInput = {
  flag?: InputMaybe<Scalars['String']['input']>;
  groupMember?: InputMaybe<GroupMemberRelateToOneForUpdateInput>;
};

export type GroupMemberFlagWhereInput = {
  AND?: InputMaybe<Array<GroupMemberFlagWhereInput>>;
  NOT?: InputMaybe<Array<GroupMemberFlagWhereInput>>;
  OR?: InputMaybe<Array<GroupMemberFlagWhereInput>>;
  flag?: InputMaybe<StringFilter>;
  groupMember?: InputMaybe<GroupMemberWhereInput>;
  id?: InputMaybe<IdFilter>;
};

export type GroupMemberFlagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupMemberManyRelationFilter = {
  every?: InputMaybe<GroupMemberWhereInput>;
  none?: InputMaybe<GroupMemberWhereInput>;
  some?: InputMaybe<GroupMemberWhereInput>;
};

export type GroupMemberOrderByInput = {
  access?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type GroupMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
};

export type GroupMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
  disconnect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
};

export type GroupMemberRelateToOneForCreateInput = {
  connect?: InputMaybe<GroupMemberWhereUniqueInput>;
  create?: InputMaybe<GroupMemberCreateInput>;
};

export type GroupMemberRelateToOneForUpdateInput = {
  connect?: InputMaybe<GroupMemberWhereUniqueInput>;
  create?: InputMaybe<GroupMemberCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupMemberUpdateArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};

export type GroupMemberUpdateInput = {
  access?: InputMaybe<Scalars['Int']['input']>;
  flags?: InputMaybe<GroupMemberFlagRelateToManyForUpdateInput>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type GroupMemberWhereInput = {
  AND?: InputMaybe<Array<GroupMemberWhereInput>>;
  NOT?: InputMaybe<Array<GroupMemberWhereInput>>;
  OR?: InputMaybe<Array<GroupMemberWhereInput>>;
  access?: InputMaybe<IntNullableFilter>;
  flags?: InputMaybe<GroupMemberFlagManyRelationFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type GroupMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  groupLogo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type GroupRelateToOneForCreateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
};

export type GroupRelateToOneForUpdateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupUpdateArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupLogo?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  groupLogo?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<GroupMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Group_GetInput = {
  groupID?: InputMaybe<Scalars['String']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InvoiceBatch = {
  __typename?: 'InvoiceBatch';
  batchID?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isOpen?: Maybe<Scalars['Boolean']['output']>;
};

export type InvoiceBatchCreateInput = {
  batchID?: InputMaybe<Scalars['String']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvoiceBatchOrderByInput = {
  batchID?: InputMaybe<OrderDirection>;
  closedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  customer?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isOpen?: InputMaybe<OrderDirection>;
};

export type InvoiceBatchUpdateArgs = {
  data: InvoiceBatchUpdateInput;
  where: InvoiceBatchWhereUniqueInput;
};

export type InvoiceBatchUpdateInput = {
  batchID?: InputMaybe<Scalars['String']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvoiceBatchWhereInput = {
  AND?: InputMaybe<Array<InvoiceBatchWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceBatchWhereInput>>;
  OR?: InputMaybe<Array<InvoiceBatchWhereInput>>;
  batchID?: InputMaybe<StringFilter>;
  closedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  customer?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isOpen?: InputMaybe<BooleanFilter>;
};

export type InvoiceBatchWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type InvoiceEntry = {
  __typename?: 'InvoiceEntry';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lineItems?: Maybe<Scalars['JSON']['output']>;
  paidAt?: Maybe<Scalars['DateTime']['output']>;
  paymentLink?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoiceEntryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<Scalars['JSON']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  paymentLink?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceEntryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  customerName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  paidAt?: InputMaybe<OrderDirection>;
  paymentLink?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type InvoiceEntryUpdateArgs = {
  data: InvoiceEntryUpdateInput;
  where: InvoiceEntryWhereUniqueInput;
};

export type InvoiceEntryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<Scalars['JSON']['input']>;
  paidAt?: InputMaybe<Scalars['DateTime']['input']>;
  paymentLink?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoiceEntryWhereInput = {
  AND?: InputMaybe<Array<InvoiceEntryWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceEntryWhereInput>>;
  OR?: InputMaybe<Array<InvoiceEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  customerName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  paidAt?: InputMaybe<DateTimeNullableFilter>;
  paymentLink?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  total?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type InvoiceEntryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type MailSendLog = {
  __typename?: 'MailSendLog';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  readAt?: Maybe<Scalars['DateTime']['output']>;
  sentAt?: Maybe<Scalars['DateTime']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type MailSendLogCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailSendLogOrderByInput = {
  body?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  readAt?: InputMaybe<OrderDirection>;
  sentAt?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  to?: InputMaybe<OrderDirection>;
};

export type MailSendLogUpdateArgs = {
  data: MailSendLogUpdateInput;
  where: MailSendLogWhereUniqueInput;
};

export type MailSendLogUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailSendLogWhereInput = {
  AND?: InputMaybe<Array<MailSendLogWhereInput>>;
  NOT?: InputMaybe<Array<MailSendLogWhereInput>>;
  OR?: InputMaybe<Array<MailSendLogWhereInput>>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  sentAt?: InputMaybe<DateTimeNullableFilter>;
  subject?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
};

export type MailSendLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MailTrackHistory = {
  __typename?: 'MailTrackHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mailTrackReferenceID?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type MailTrackHistoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  mailTrackReferenceID?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailTrackHistoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  mailTrackReferenceID?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  to?: InputMaybe<OrderDirection>;
};

export type MailTrackHistoryUpdateArgs = {
  data: MailTrackHistoryUpdateInput;
  where: MailTrackHistoryWhereUniqueInput;
};

export type MailTrackHistoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  mailTrackReferenceID?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailTrackHistoryWhereInput = {
  AND?: InputMaybe<Array<MailTrackHistoryWhereInput>>;
  NOT?: InputMaybe<Array<MailTrackHistoryWhereInput>>;
  OR?: InputMaybe<Array<MailTrackHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  mailTrackReferenceID?: InputMaybe<StringFilter>;
  subject?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
};

export type MailTrackHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  api_application_create?: Maybe<Api_Application_CreateOutput>;
  api_application_delete?: Maybe<Api_Application_DeleteOutput>;
  api_application_update?: Maybe<Api_Application_UpdateOutput>;
  api_education_create?: Maybe<Api_Education_CreateOutput>;
  api_education_delete?: Maybe<Api_Education_DeleteOutput>;
  api_education_update?: Maybe<Api_Education_UpdateOutput>;
  api_event_create?: Maybe<Api_Event_CreateOutput>;
  api_event_delete?: Maybe<Api_Event_DeleteOutput>;
  api_event_update?: Maybe<Api_Event_UpdateOutput>;
  api_file_create?: Maybe<Api_File_CreateOutput>;
  api_file_delete?: Maybe<Api_File_DeleteOutput>;
  api_file_update?: Maybe<Api_File_UpdateOutput>;
  api_invoiceBatch_create?: Maybe<Api_InvoiceBatch_CreateOutput>;
  api_invoiceBatch_delete?: Maybe<Api_InvoiceBatch_DeleteOutput>;
  api_invoiceBatch_update?: Maybe<Api_InvoiceBatch_UpdateOutput>;
  api_invoice_create?: Maybe<Api_Invoice_CreateOutput>;
  api_invoice_delete?: Maybe<Api_Invoice_DeleteOutput>;
  api_invoice_update?: Maybe<Api_Invoice_UpdateOutput>;
  api_member_create?: Maybe<Api_Member_CreateOutput>;
  api_member_delete?: Maybe<Api_Member_DeleteOutput>;
  api_member_update?: Maybe<Api_Member_UpdateOutput>;
  api_note_create?: Maybe<Api_Note_CreateOutput>;
  api_note_delete?: Maybe<Api_Note_DeleteOutput>;
  api_note_update?: Maybe<Api_Note_UpdateOutput>;
  api_productFulfillment_create?: Maybe<Api_ProductFulfillment_CreateOutput>;
  api_productFulfillment_delete?: Maybe<Api_ProductFulfillment_DeleteOutput>;
  api_productFulfillment_update?: Maybe<Api_ProductFulfillment_UpdateOutput>;
  api_servicePurchase_create?: Maybe<Api_ServicePurchase_CreateOutput>;
  api_servicePurchase_delete?: Maybe<Api_ServicePurchase_DeleteOutput>;
  api_servicePurchase_update?: Maybe<Api_ServicePurchase_UpdateOutput>;
  api_society_create?: Maybe<Api_Society_CreateOutput>;
  api_society_delete?: Maybe<Api_Society_DeleteOutput>;
  api_society_update?: Maybe<Api_Society_UpdateOutput>;
  api_sync_crm_netforum?: Maybe<Api_Sync_Crm_NetforumOutput>;
  api_sync_crm_wordpress?: Maybe<Api_Sync_Crm_WordpressOutput>;
  api_sync_from_netforum?: Maybe<Api_Sync_From_NetforumOutput>;
  api_sync_from_wordpress?: Maybe<Api_Sync_From_WordpressOutput>;
  authclient_changePassword?: Maybe<Scalars['Boolean']['output']>;
  authclient_login?: Maybe<ClientItemAuthenticationWithPasswordResult>;
  authclient_register?: Maybe<Scalars['Boolean']['output']>;
  authclient_requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  authclient_resetPassword?: Maybe<Scalars['Boolean']['output']>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createApplication?: Maybe<Application>;
  createApplications?: Maybe<Array<Maybe<Application>>>;
  createEvent?: Maybe<Event>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createFile?: Maybe<File>;
  createFiles?: Maybe<Array<Maybe<File>>>;
  createGroup?: Maybe<Group>;
  createGroupMember?: Maybe<GroupMember>;
  createGroupMemberFlag?: Maybe<GroupMemberFlag>;
  createGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  createGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  createGroups?: Maybe<Array<Maybe<Group>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInvoiceBatch?: Maybe<InvoiceBatch>;
  createInvoiceBatches?: Maybe<Array<Maybe<InvoiceBatch>>>;
  createInvoiceEntries?: Maybe<Array<Maybe<InvoiceEntry>>>;
  createInvoiceEntry?: Maybe<InvoiceEntry>;
  createMailSendLog?: Maybe<MailSendLog>;
  createMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  createMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  createMailTrackHistory?: Maybe<MailTrackHistory>;
  createNetforumLog?: Maybe<NetforumLog>;
  createNetforumLogs?: Maybe<Array<Maybe<NetforumLog>>>;
  createProductFulfillment?: Maybe<ProductFulfillment>;
  createProductFulfillments?: Maybe<Array<Maybe<ProductFulfillment>>>;
  createServerError?: Maybe<ServerError>;
  createServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  createServerLog?: Maybe<ServerLog>;
  createServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  createServicePurchase?: Maybe<ServicePurchase>;
  createServicePurchases?: Maybe<Array<Maybe<ServicePurchase>>>;
  createSocieties?: Maybe<Array<Maybe<Society>>>;
  createSociety?: Maybe<Society>;
  createUser?: Maybe<User>;
  createUserEducationRecord?: Maybe<UserEducationRecord>;
  createUserEducationRecords?: Maybe<Array<Maybe<UserEducationRecord>>>;
  createUserFlag?: Maybe<UserFlag>;
  createUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  createUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  createUserLoginHistory?: Maybe<UserLoginHistory>;
  createUserNote?: Maybe<UserNote>;
  createUserNotes?: Maybe<Array<Maybe<UserNote>>>;
  createUserSystemFlag?: Maybe<UserSystemFlag>;
  createUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createWPLog?: Maybe<WpLog>;
  createWPLogs?: Maybe<Array<Maybe<WpLog>>>;
  deleteApplication?: Maybe<Application>;
  deleteApplications?: Maybe<Array<Maybe<Application>>>;
  deleteEvent?: Maybe<Event>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteFile?: Maybe<File>;
  deleteFiles?: Maybe<Array<Maybe<File>>>;
  deleteGroup?: Maybe<Group>;
  deleteGroupMember?: Maybe<GroupMember>;
  deleteGroupMemberFlag?: Maybe<GroupMemberFlag>;
  deleteGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  deleteGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  deleteGroups?: Maybe<Array<Maybe<Group>>>;
  deleteInvoiceBatch?: Maybe<InvoiceBatch>;
  deleteInvoiceBatches?: Maybe<Array<Maybe<InvoiceBatch>>>;
  deleteInvoiceEntries?: Maybe<Array<Maybe<InvoiceEntry>>>;
  deleteInvoiceEntry?: Maybe<InvoiceEntry>;
  deleteMailSendLog?: Maybe<MailSendLog>;
  deleteMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  deleteMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  deleteMailTrackHistory?: Maybe<MailTrackHistory>;
  deleteNetforumLog?: Maybe<NetforumLog>;
  deleteNetforumLogs?: Maybe<Array<Maybe<NetforumLog>>>;
  deleteProductFulfillment?: Maybe<ProductFulfillment>;
  deleteProductFulfillments?: Maybe<Array<Maybe<ProductFulfillment>>>;
  deleteServerError?: Maybe<ServerError>;
  deleteServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  deleteServerLog?: Maybe<ServerLog>;
  deleteServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  deleteServicePurchase?: Maybe<ServicePurchase>;
  deleteServicePurchases?: Maybe<Array<Maybe<ServicePurchase>>>;
  deleteSocieties?: Maybe<Array<Maybe<Society>>>;
  deleteSociety?: Maybe<Society>;
  deleteUser?: Maybe<User>;
  deleteUserEducationRecord?: Maybe<UserEducationRecord>;
  deleteUserEducationRecords?: Maybe<Array<Maybe<UserEducationRecord>>>;
  deleteUserFlag?: Maybe<UserFlag>;
  deleteUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  deleteUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  deleteUserLoginHistory?: Maybe<UserLoginHistory>;
  deleteUserNote?: Maybe<UserNote>;
  deleteUserNotes?: Maybe<Array<Maybe<UserNote>>>;
  deleteUserSystemFlag?: Maybe<UserSystemFlag>;
  deleteUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteWPLog?: Maybe<WpLog>;
  deleteWPLogs?: Maybe<Array<Maybe<WpLog>>>;
  endSession: Scalars['Boolean']['output'];
  file_upload?: Maybe<FileUploadOutput>;
  file_uploadURL?: Maybe<FileUploadUrlOutput>;
  updateApplication?: Maybe<Application>;
  updateApplications?: Maybe<Array<Maybe<Application>>>;
  updateEvent?: Maybe<Event>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateFile?: Maybe<File>;
  updateFiles?: Maybe<Array<Maybe<File>>>;
  updateGroup?: Maybe<Group>;
  updateGroupMember?: Maybe<GroupMember>;
  updateGroupMemberFlag?: Maybe<GroupMemberFlag>;
  updateGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  updateGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  updateGroups?: Maybe<Array<Maybe<Group>>>;
  updateInvoiceBatch?: Maybe<InvoiceBatch>;
  updateInvoiceBatches?: Maybe<Array<Maybe<InvoiceBatch>>>;
  updateInvoiceEntries?: Maybe<Array<Maybe<InvoiceEntry>>>;
  updateInvoiceEntry?: Maybe<InvoiceEntry>;
  updateMailSendLog?: Maybe<MailSendLog>;
  updateMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  updateMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  updateMailTrackHistory?: Maybe<MailTrackHistory>;
  updateNetforumLog?: Maybe<NetforumLog>;
  updateNetforumLogs?: Maybe<Array<Maybe<NetforumLog>>>;
  updateProductFulfillment?: Maybe<ProductFulfillment>;
  updateProductFulfillments?: Maybe<Array<Maybe<ProductFulfillment>>>;
  updateServerError?: Maybe<ServerError>;
  updateServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  updateServerLog?: Maybe<ServerLog>;
  updateServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  updateServicePurchase?: Maybe<ServicePurchase>;
  updateServicePurchases?: Maybe<Array<Maybe<ServicePurchase>>>;
  updateSocieties?: Maybe<Array<Maybe<Society>>>;
  updateSociety?: Maybe<Society>;
  updateUser?: Maybe<User>;
  updateUserEducationRecord?: Maybe<UserEducationRecord>;
  updateUserEducationRecords?: Maybe<Array<Maybe<UserEducationRecord>>>;
  updateUserFlag?: Maybe<UserFlag>;
  updateUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  updateUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  updateUserLoginHistory?: Maybe<UserLoginHistory>;
  updateUserNote?: Maybe<UserNote>;
  updateUserNotes?: Maybe<Array<Maybe<UserNote>>>;
  updateUserSystemFlag?: Maybe<UserSystemFlag>;
  updateUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateWPLog?: Maybe<WpLog>;
  updateWPLogs?: Maybe<Array<Maybe<WpLog>>>;
  user_setFlag?: Maybe<Array<Maybe<UserFlag>>>;
};


export type MutationApi_Application_CreateArgs = {
  input: Api_Application_CreateInput;
};


export type MutationApi_Application_DeleteArgs = {
  input: Api_Application_DeleteInput;
};


export type MutationApi_Application_UpdateArgs = {
  input: Api_Application_UpdateInput;
};


export type MutationApi_Education_CreateArgs = {
  input: Api_Education_CreateInput;
};


export type MutationApi_Education_DeleteArgs = {
  input: Api_Education_DeleteInput;
};


export type MutationApi_Education_UpdateArgs = {
  input: Api_Education_UpdateInput;
};


export type MutationApi_Event_CreateArgs = {
  input: Api_Event_CreateInput;
};


export type MutationApi_Event_DeleteArgs = {
  input: Api_Event_DeleteInput;
};


export type MutationApi_Event_UpdateArgs = {
  input: Api_Event_UpdateInput;
};


export type MutationApi_File_CreateArgs = {
  input: Api_File_CreateInput;
};


export type MutationApi_File_DeleteArgs = {
  input: Api_File_DeleteInput;
};


export type MutationApi_File_UpdateArgs = {
  input: Api_File_UpdateInput;
};


export type MutationApi_InvoiceBatch_CreateArgs = {
  input: Api_InvoiceBatch_CreateInput;
};


export type MutationApi_InvoiceBatch_DeleteArgs = {
  input: Api_InvoiceBatch_DeleteInput;
};


export type MutationApi_InvoiceBatch_UpdateArgs = {
  input: Api_InvoiceBatch_UpdateInput;
};


export type MutationApi_Invoice_CreateArgs = {
  input: Api_Invoice_CreateInput;
};


export type MutationApi_Invoice_DeleteArgs = {
  input: Api_Invoice_DeleteInput;
};


export type MutationApi_Invoice_UpdateArgs = {
  input: Api_Invoice_UpdateInput;
};


export type MutationApi_Member_CreateArgs = {
  input: Api_Member_CreateInput;
};


export type MutationApi_Member_DeleteArgs = {
  input: Api_Member_DeleteInput;
};


export type MutationApi_Member_UpdateArgs = {
  input: Api_Member_UpdateInput;
};


export type MutationApi_Note_CreateArgs = {
  input: Api_Note_CreateInput;
};


export type MutationApi_Note_DeleteArgs = {
  input: Api_Note_DeleteInput;
};


export type MutationApi_Note_UpdateArgs = {
  input: Api_Note_UpdateInput;
};


export type MutationApi_ProductFulfillment_CreateArgs = {
  input: Api_ProductFulfillment_CreateInput;
};


export type MutationApi_ProductFulfillment_DeleteArgs = {
  input: Api_ProductFulfillment_DeleteInput;
};


export type MutationApi_ProductFulfillment_UpdateArgs = {
  input: Api_ProductFulfillment_UpdateInput;
};


export type MutationApi_ServicePurchase_CreateArgs = {
  input: Api_ServicePurchase_CreateInput;
};


export type MutationApi_ServicePurchase_DeleteArgs = {
  input: Api_ServicePurchase_DeleteInput;
};


export type MutationApi_ServicePurchase_UpdateArgs = {
  input: Api_ServicePurchase_UpdateInput;
};


export type MutationApi_Society_CreateArgs = {
  input: Api_Society_CreateInput;
};


export type MutationApi_Society_DeleteArgs = {
  input: Api_Society_DeleteInput;
};


export type MutationApi_Society_UpdateArgs = {
  input: Api_Society_UpdateInput;
};


export type MutationApi_Sync_Crm_NetforumArgs = {
  input: Api_Sync_Crm_NetforumInput;
};


export type MutationApi_Sync_Crm_WordpressArgs = {
  input: Api_Sync_Crm_WordpressInput;
};


export type MutationApi_Sync_From_NetforumArgs = {
  input: Api_Sync_From_NetforumInput;
};


export type MutationApi_Sync_From_WordpressArgs = {
  input: Api_Sync_From_WordpressInput;
};


export type MutationAuthclient_ChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationAuthclient_LoginArgs = {
  browserId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAuthclient_RegisterArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationAuthclient_RequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationAuthclient_ResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  adminPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationCreateApplicationArgs = {
  data: ApplicationCreateInput;
};


export type MutationCreateApplicationsArgs = {
  data: Array<ApplicationCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateFilesArgs = {
  data: Array<FileCreateInput>;
};


export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateGroupMemberArgs = {
  data: GroupMemberCreateInput;
};


export type MutationCreateGroupMemberFlagArgs = {
  data: GroupMemberFlagCreateInput;
};


export type MutationCreateGroupMemberFlagsArgs = {
  data: Array<GroupMemberFlagCreateInput>;
};


export type MutationCreateGroupMembersArgs = {
  data: Array<GroupMemberCreateInput>;
};


export type MutationCreateGroupsArgs = {
  data: Array<GroupCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateInvoiceBatchArgs = {
  data: InvoiceBatchCreateInput;
};


export type MutationCreateInvoiceBatchesArgs = {
  data: Array<InvoiceBatchCreateInput>;
};


export type MutationCreateInvoiceEntriesArgs = {
  data: Array<InvoiceEntryCreateInput>;
};


export type MutationCreateInvoiceEntryArgs = {
  data: InvoiceEntryCreateInput;
};


export type MutationCreateMailSendLogArgs = {
  data: MailSendLogCreateInput;
};


export type MutationCreateMailSendLogsArgs = {
  data: Array<MailSendLogCreateInput>;
};


export type MutationCreateMailTrackHistoriesArgs = {
  data: Array<MailTrackHistoryCreateInput>;
};


export type MutationCreateMailTrackHistoryArgs = {
  data: MailTrackHistoryCreateInput;
};


export type MutationCreateNetforumLogArgs = {
  data: NetforumLogCreateInput;
};


export type MutationCreateNetforumLogsArgs = {
  data: Array<NetforumLogCreateInput>;
};


export type MutationCreateProductFulfillmentArgs = {
  data: ProductFulfillmentCreateInput;
};


export type MutationCreateProductFulfillmentsArgs = {
  data: Array<ProductFulfillmentCreateInput>;
};


export type MutationCreateServerErrorArgs = {
  data: ServerErrorCreateInput;
};


export type MutationCreateServerErrorsArgs = {
  data: Array<ServerErrorCreateInput>;
};


export type MutationCreateServerLogArgs = {
  data: ServerLogCreateInput;
};


export type MutationCreateServerLogsArgs = {
  data: Array<ServerLogCreateInput>;
};


export type MutationCreateServicePurchaseArgs = {
  data: ServicePurchaseCreateInput;
};


export type MutationCreateServicePurchasesArgs = {
  data: Array<ServicePurchaseCreateInput>;
};


export type MutationCreateSocietiesArgs = {
  data: Array<SocietyCreateInput>;
};


export type MutationCreateSocietyArgs = {
  data: SocietyCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserEducationRecordArgs = {
  data: UserEducationRecordCreateInput;
};


export type MutationCreateUserEducationRecordsArgs = {
  data: Array<UserEducationRecordCreateInput>;
};


export type MutationCreateUserFlagArgs = {
  data: UserFlagCreateInput;
};


export type MutationCreateUserFlagsArgs = {
  data: Array<UserFlagCreateInput>;
};


export type MutationCreateUserLoginHistoriesArgs = {
  data: Array<UserLoginHistoryCreateInput>;
};


export type MutationCreateUserLoginHistoryArgs = {
  data: UserLoginHistoryCreateInput;
};


export type MutationCreateUserNoteArgs = {
  data: UserNoteCreateInput;
};


export type MutationCreateUserNotesArgs = {
  data: Array<UserNoteCreateInput>;
};


export type MutationCreateUserSystemFlagArgs = {
  data: UserSystemFlagCreateInput;
};


export type MutationCreateUserSystemFlagsArgs = {
  data: Array<UserSystemFlagCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateWpLogArgs = {
  data: WpLogCreateInput;
};


export type MutationCreateWpLogsArgs = {
  data: Array<WpLogCreateInput>;
};


export type MutationDeleteApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type MutationDeleteApplicationsArgs = {
  where: Array<ApplicationWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteFilesArgs = {
  where: Array<FileWhereUniqueInput>;
};


export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};


export type MutationDeleteGroupMemberFlagArgs = {
  where: GroupMemberFlagWhereUniqueInput;
};


export type MutationDeleteGroupMemberFlagsArgs = {
  where: Array<GroupMemberFlagWhereUniqueInput>;
};


export type MutationDeleteGroupMembersArgs = {
  where: Array<GroupMemberWhereUniqueInput>;
};


export type MutationDeleteGroupsArgs = {
  where: Array<GroupWhereUniqueInput>;
};


export type MutationDeleteInvoiceBatchArgs = {
  where: InvoiceBatchWhereUniqueInput;
};


export type MutationDeleteInvoiceBatchesArgs = {
  where: Array<InvoiceBatchWhereUniqueInput>;
};


export type MutationDeleteInvoiceEntriesArgs = {
  where: Array<InvoiceEntryWhereUniqueInput>;
};


export type MutationDeleteInvoiceEntryArgs = {
  where: InvoiceEntryWhereUniqueInput;
};


export type MutationDeleteMailSendLogArgs = {
  where: MailSendLogWhereUniqueInput;
};


export type MutationDeleteMailSendLogsArgs = {
  where: Array<MailSendLogWhereUniqueInput>;
};


export type MutationDeleteMailTrackHistoriesArgs = {
  where: Array<MailTrackHistoryWhereUniqueInput>;
};


export type MutationDeleteMailTrackHistoryArgs = {
  where: MailTrackHistoryWhereUniqueInput;
};


export type MutationDeleteNetforumLogArgs = {
  where: NetforumLogWhereUniqueInput;
};


export type MutationDeleteNetforumLogsArgs = {
  where: Array<NetforumLogWhereUniqueInput>;
};


export type MutationDeleteProductFulfillmentArgs = {
  where: ProductFulfillmentWhereUniqueInput;
};


export type MutationDeleteProductFulfillmentsArgs = {
  where: Array<ProductFulfillmentWhereUniqueInput>;
};


export type MutationDeleteServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};


export type MutationDeleteServerErrorsArgs = {
  where: Array<ServerErrorWhereUniqueInput>;
};


export type MutationDeleteServerLogArgs = {
  where: ServerLogWhereUniqueInput;
};


export type MutationDeleteServerLogsArgs = {
  where: Array<ServerLogWhereUniqueInput>;
};


export type MutationDeleteServicePurchaseArgs = {
  where: ServicePurchaseWhereUniqueInput;
};


export type MutationDeleteServicePurchasesArgs = {
  where: Array<ServicePurchaseWhereUniqueInput>;
};


export type MutationDeleteSocietiesArgs = {
  where: Array<SocietyWhereUniqueInput>;
};


export type MutationDeleteSocietyArgs = {
  where: SocietyWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserEducationRecordArgs = {
  where: UserEducationRecordWhereUniqueInput;
};


export type MutationDeleteUserEducationRecordsArgs = {
  where: Array<UserEducationRecordWhereUniqueInput>;
};


export type MutationDeleteUserFlagArgs = {
  where: UserFlagWhereUniqueInput;
};


export type MutationDeleteUserFlagsArgs = {
  where: Array<UserFlagWhereUniqueInput>;
};


export type MutationDeleteUserLoginHistoriesArgs = {
  where: Array<UserLoginHistoryWhereUniqueInput>;
};


export type MutationDeleteUserLoginHistoryArgs = {
  where: UserLoginHistoryWhereUniqueInput;
};


export type MutationDeleteUserNoteArgs = {
  where: UserNoteWhereUniqueInput;
};


export type MutationDeleteUserNotesArgs = {
  where: Array<UserNoteWhereUniqueInput>;
};


export type MutationDeleteUserSystemFlagArgs = {
  where: UserSystemFlagWhereUniqueInput;
};


export type MutationDeleteUserSystemFlagsArgs = {
  where: Array<UserSystemFlagWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteWpLogArgs = {
  where: WpLogWhereUniqueInput;
};


export type MutationDeleteWpLogsArgs = {
  where: Array<WpLogWhereUniqueInput>;
};


export type MutationFile_UploadArgs = {
  input: File_UploadInput;
};


export type MutationFile_UploadUrlArgs = {
  input: File_UploadUrlInput;
};


export type MutationUpdateApplicationArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpdateApplicationsArgs = {
  data: Array<ApplicationUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateFilesArgs = {
  data: Array<FileUpdateArgs>;
};


export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateGroupMemberArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};


export type MutationUpdateGroupMemberFlagArgs = {
  data: GroupMemberFlagUpdateInput;
  where: GroupMemberFlagWhereUniqueInput;
};


export type MutationUpdateGroupMemberFlagsArgs = {
  data: Array<GroupMemberFlagUpdateArgs>;
};


export type MutationUpdateGroupMembersArgs = {
  data: Array<GroupMemberUpdateArgs>;
};


export type MutationUpdateGroupsArgs = {
  data: Array<GroupUpdateArgs>;
};


export type MutationUpdateInvoiceBatchArgs = {
  data: InvoiceBatchUpdateInput;
  where: InvoiceBatchWhereUniqueInput;
};


export type MutationUpdateInvoiceBatchesArgs = {
  data: Array<InvoiceBatchUpdateArgs>;
};


export type MutationUpdateInvoiceEntriesArgs = {
  data: Array<InvoiceEntryUpdateArgs>;
};


export type MutationUpdateInvoiceEntryArgs = {
  data: InvoiceEntryUpdateInput;
  where: InvoiceEntryWhereUniqueInput;
};


export type MutationUpdateMailSendLogArgs = {
  data: MailSendLogUpdateInput;
  where: MailSendLogWhereUniqueInput;
};


export type MutationUpdateMailSendLogsArgs = {
  data: Array<MailSendLogUpdateArgs>;
};


export type MutationUpdateMailTrackHistoriesArgs = {
  data: Array<MailTrackHistoryUpdateArgs>;
};


export type MutationUpdateMailTrackHistoryArgs = {
  data: MailTrackHistoryUpdateInput;
  where: MailTrackHistoryWhereUniqueInput;
};


export type MutationUpdateNetforumLogArgs = {
  data: NetforumLogUpdateInput;
  where: NetforumLogWhereUniqueInput;
};


export type MutationUpdateNetforumLogsArgs = {
  data: Array<NetforumLogUpdateArgs>;
};


export type MutationUpdateProductFulfillmentArgs = {
  data: ProductFulfillmentUpdateInput;
  where: ProductFulfillmentWhereUniqueInput;
};


export type MutationUpdateProductFulfillmentsArgs = {
  data: Array<ProductFulfillmentUpdateArgs>;
};


export type MutationUpdateServerErrorArgs = {
  data: ServerErrorUpdateInput;
  where: ServerErrorWhereUniqueInput;
};


export type MutationUpdateServerErrorsArgs = {
  data: Array<ServerErrorUpdateArgs>;
};


export type MutationUpdateServerLogArgs = {
  data: ServerLogUpdateInput;
  where: ServerLogWhereUniqueInput;
};


export type MutationUpdateServerLogsArgs = {
  data: Array<ServerLogUpdateArgs>;
};


export type MutationUpdateServicePurchaseArgs = {
  data: ServicePurchaseUpdateInput;
  where: ServicePurchaseWhereUniqueInput;
};


export type MutationUpdateServicePurchasesArgs = {
  data: Array<ServicePurchaseUpdateArgs>;
};


export type MutationUpdateSocietiesArgs = {
  data: Array<SocietyUpdateArgs>;
};


export type MutationUpdateSocietyArgs = {
  data: SocietyUpdateInput;
  where: SocietyWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserEducationRecordArgs = {
  data: UserEducationRecordUpdateInput;
  where: UserEducationRecordWhereUniqueInput;
};


export type MutationUpdateUserEducationRecordsArgs = {
  data: Array<UserEducationRecordUpdateArgs>;
};


export type MutationUpdateUserFlagArgs = {
  data: UserFlagUpdateInput;
  where: UserFlagWhereUniqueInput;
};


export type MutationUpdateUserFlagsArgs = {
  data: Array<UserFlagUpdateArgs>;
};


export type MutationUpdateUserLoginHistoriesArgs = {
  data: Array<UserLoginHistoryUpdateArgs>;
};


export type MutationUpdateUserLoginHistoryArgs = {
  data: UserLoginHistoryUpdateInput;
  where: UserLoginHistoryWhereUniqueInput;
};


export type MutationUpdateUserNoteArgs = {
  data: UserNoteUpdateInput;
  where: UserNoteWhereUniqueInput;
};


export type MutationUpdateUserNotesArgs = {
  data: Array<UserNoteUpdateArgs>;
};


export type MutationUpdateUserSystemFlagArgs = {
  data: UserSystemFlagUpdateInput;
  where: UserSystemFlagWhereUniqueInput;
};


export type MutationUpdateUserSystemFlagsArgs = {
  data: Array<UserSystemFlagUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateWpLogArgs = {
  data: WpLogUpdateInput;
  where: WpLogWhereUniqueInput;
};


export type MutationUpdateWpLogsArgs = {
  data: Array<WpLogUpdateArgs>;
};


export type MutationUser_SetFlagArgs = {
  input: User_SetFlagInput;
};

export type Nf_Sync_Log = {
  __typename?: 'NF_SYNC_LOG';
  message: Scalars['String']['output'];
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NetforumLog = {
  __typename?: 'NetforumLog';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
};

export type NetforumLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type NetforumLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  topic?: InputMaybe<OrderDirection>;
};

export type NetforumLogUpdateArgs = {
  data: NetforumLogUpdateInput;
  where: NetforumLogWhereUniqueInput;
};

export type NetforumLogUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type NetforumLogWhereInput = {
  AND?: InputMaybe<Array<NetforumLogWhereInput>>;
  NOT?: InputMaybe<Array<NetforumLogWhereInput>>;
  OR?: InputMaybe<Array<NetforumLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  metadata?: InputMaybe<StringFilter>;
  topic?: InputMaybe<StringFilter>;
};

export type NetforumLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type ProductFulfillment = {
  __typename?: 'ProductFulfillment';
  balance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  returnedCancelled?: Maybe<Scalars['Boolean']['output']>;
  returnedCancelledAt?: Maybe<Scalars['DateTime']['output']>;
  shipped?: Maybe<Scalars['Boolean']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type ProductFulfillmentCreateInput = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  returnedCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  returnedCancelledAt?: InputMaybe<Scalars['DateTime']['input']>;
  shipped?: InputMaybe<Scalars['Boolean']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductFulfillmentOrderByInput = {
  balance?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  package?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  product?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
  returnedCancelled?: InputMaybe<OrderDirection>;
  returnedCancelledAt?: InputMaybe<OrderDirection>;
  shipped?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
};

export type ProductFulfillmentUpdateArgs = {
  data: ProductFulfillmentUpdateInput;
  where: ProductFulfillmentWhereUniqueInput;
};

export type ProductFulfillmentUpdateInput = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  returnedCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  returnedCancelledAt?: InputMaybe<Scalars['DateTime']['input']>;
  shipped?: InputMaybe<Scalars['Boolean']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductFulfillmentWhereInput = {
  AND?: InputMaybe<Array<ProductFulfillmentWhereInput>>;
  NOT?: InputMaybe<Array<ProductFulfillmentWhereInput>>;
  OR?: InputMaybe<Array<ProductFulfillmentWhereInput>>;
  balance?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  note?: InputMaybe<StringFilter>;
  package?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<FloatNullableFilter>;
  returnedCancelled?: InputMaybe<BooleanFilter>;
  returnedCancelledAt?: InputMaybe<DateTimeNullableFilter>;
  shipped?: InputMaybe<BooleanFilter>;
  total?: InputMaybe<FloatNullableFilter>;
};

export type ProductFulfillmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  ErrorTest?: Maybe<Scalars['String']['output']>;
  api_application_get?: Maybe<Api_Application_GetOutput>;
  api_application_list?: Maybe<Api_Application_ListOutput>;
  api_education_aggregate?: Maybe<Api_Education_AggregateOutput>;
  api_education_get?: Maybe<Api_Education_GetOutput>;
  api_education_groupBy?: Maybe<Api_Education_GroupByOutput>;
  api_education_list?: Maybe<Api_Education_ListOutput>;
  api_event_aggregate?: Maybe<Api_Event_AggregateOutput>;
  api_event_get?: Maybe<Api_Event_GetOutput>;
  api_event_groupBy?: Maybe<Api_Event_GroupByOutput>;
  api_event_list?: Maybe<Api_Event_ListOutput>;
  api_file_get?: Maybe<Api_File_GetOutput>;
  api_file_list?: Maybe<Api_File_ListOutput>;
  api_invoiceBatch_get?: Maybe<Api_InvoiceBatch_GetOutput>;
  api_invoiceBatch_list?: Maybe<Api_InvoiceBatch_ListOutput>;
  api_invoice_aggregate?: Maybe<Api_Invoice_AggregateOutput>;
  api_invoice_get?: Maybe<Api_Invoice_GetOutput>;
  api_invoice_groupBy?: Maybe<Api_Invoice_GroupByOutput>;
  api_invoice_list?: Maybe<Api_Invoice_ListOutput>;
  api_member_aggregate?: Maybe<Api_Member_AggregateOutput>;
  api_member_get?: Maybe<Api_Member_GetOutput>;
  api_member_groupBy?: Maybe<Api_Member_GroupByOutput>;
  api_member_list?: Maybe<Api_Member_ListOutput>;
  api_note_get?: Maybe<Api_Note_GetOutput>;
  api_note_list?: Maybe<Api_Note_ListOutput>;
  api_productFulfillment_aggregate?: Maybe<Api_ProductFulfillment_AggregateOutput>;
  api_productFulfillment_get?: Maybe<Api_ProductFulfillment_GetOutput>;
  api_productFulfillment_groupBy?: Maybe<Api_ProductFulfillment_GroupByOutput>;
  api_productFulfillment_list?: Maybe<Api_ProductFulfillment_ListOutput>;
  api_servicePurchase_aggregate?: Maybe<Api_ServicePurchase_AggregateOutput>;
  api_servicePurchase_get?: Maybe<Api_ServicePurchase_GetOutput>;
  api_servicePurchase_groupBy?: Maybe<Api_ServicePurchase_GroupByOutput>;
  api_servicePurchase_list?: Maybe<Api_ServicePurchase_ListOutput>;
  api_society_get?: Maybe<Api_Society_GetOutput>;
  api_society_list?: Maybe<Api_Society_ListOutput>;
  api_timecheck?: Maybe<Api_TimecheckOutput>;
  api_wpportaluser_get?: Maybe<Api_Wpportaluser_GetOutput>;
  api_wpportaluser_list?: Maybe<Api_Wpportaluser_ListOutput>;
  application?: Maybe<Application>;
  applications?: Maybe<Array<Application>>;
  applicationsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  event?: Maybe<Event>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<File>;
  files?: Maybe<Array<File>>;
  filesCount?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Group>;
  groupMember?: Maybe<GroupMember>;
  groupMemberFlag?: Maybe<GroupMemberFlag>;
  groupMemberFlags?: Maybe<Array<GroupMemberFlag>>;
  groupMemberFlagsCount?: Maybe<Scalars['Int']['output']>;
  groupMembers?: Maybe<Array<GroupMember>>;
  groupMembersCount?: Maybe<Scalars['Int']['output']>;
  group_get?: Maybe<GroupGetResult>;
  groups?: Maybe<Array<Group>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  invoiceBatch?: Maybe<InvoiceBatch>;
  invoiceBatches?: Maybe<Array<InvoiceBatch>>;
  invoiceBatchesCount?: Maybe<Scalars['Int']['output']>;
  invoiceEntries?: Maybe<Array<InvoiceEntry>>;
  invoiceEntriesCount?: Maybe<Scalars['Int']['output']>;
  invoiceEntry?: Maybe<InvoiceEntry>;
  keystone: KeystoneMeta;
  mailSendLog?: Maybe<MailSendLog>;
  mailSendLogs?: Maybe<Array<MailSendLog>>;
  mailSendLogsCount?: Maybe<Scalars['Int']['output']>;
  mailTrackHistories?: Maybe<Array<MailTrackHistory>>;
  mailTrackHistoriesCount?: Maybe<Scalars['Int']['output']>;
  mailTrackHistory?: Maybe<MailTrackHistory>;
  netforumLog?: Maybe<NetforumLog>;
  netforumLogs?: Maybe<Array<NetforumLog>>;
  netforumLogsCount?: Maybe<Scalars['Int']['output']>;
  productFulfillment?: Maybe<ProductFulfillment>;
  productFulfillments?: Maybe<Array<ProductFulfillment>>;
  productFulfillmentsCount?: Maybe<Scalars['Int']['output']>;
  serverError?: Maybe<ServerError>;
  serverErrors?: Maybe<Array<ServerError>>;
  serverErrorsCount?: Maybe<Scalars['Int']['output']>;
  serverLog?: Maybe<ServerLog>;
  serverLogs?: Maybe<Array<ServerLog>>;
  serverLogsCount?: Maybe<Scalars['Int']['output']>;
  servicePurchase?: Maybe<ServicePurchase>;
  servicePurchases?: Maybe<Array<ServicePurchase>>;
  servicePurchasesCount?: Maybe<Scalars['Int']['output']>;
  societies?: Maybe<Array<Society>>;
  societiesCount?: Maybe<Scalars['Int']['output']>;
  society?: Maybe<Society>;
  user?: Maybe<User>;
  userEducationRecord?: Maybe<UserEducationRecord>;
  userEducationRecords?: Maybe<Array<UserEducationRecord>>;
  userEducationRecordsCount?: Maybe<Scalars['Int']['output']>;
  userFlag?: Maybe<UserFlag>;
  userFlags?: Maybe<Array<UserFlag>>;
  userFlagsCount?: Maybe<Scalars['Int']['output']>;
  userLoginHistories?: Maybe<Array<UserLoginHistory>>;
  userLoginHistoriesCount?: Maybe<Scalars['Int']['output']>;
  userLoginHistory?: Maybe<UserLoginHistory>;
  userNote?: Maybe<UserNote>;
  userNotes?: Maybe<Array<UserNote>>;
  userNotesCount?: Maybe<Scalars['Int']['output']>;
  userSystemFlag?: Maybe<UserSystemFlag>;
  userSystemFlags?: Maybe<Array<UserSystemFlag>>;
  userSystemFlagsCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  wPLog?: Maybe<WpLog>;
  wPLogs?: Maybe<Array<WpLog>>;
  wPLogsCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryApi_Application_GetArgs = {
  input: Api_Application_GetInput;
};


export type QueryApi_Application_ListArgs = {
  input: Api_Application_ListInput;
};


export type QueryApi_Education_AggregateArgs = {
  input: Api_Education_AggregateInput;
};


export type QueryApi_Education_GetArgs = {
  input: Api_Education_GetInput;
};


export type QueryApi_Education_GroupByArgs = {
  input: Api_Education_GroupByInput;
};


export type QueryApi_Education_ListArgs = {
  input: Api_Education_ListInput;
};


export type QueryApi_Event_AggregateArgs = {
  input: Api_Event_AggregateInput;
};


export type QueryApi_Event_GetArgs = {
  input: Api_Event_GetInput;
};


export type QueryApi_Event_GroupByArgs = {
  input: Api_Event_GroupByInput;
};


export type QueryApi_Event_ListArgs = {
  input: Api_Event_ListInput;
};


export type QueryApi_File_GetArgs = {
  input: Api_File_GetInput;
};


export type QueryApi_File_ListArgs = {
  input: Api_File_ListInput;
};


export type QueryApi_InvoiceBatch_GetArgs = {
  input: Api_InvoiceBatch_GetInput;
};


export type QueryApi_InvoiceBatch_ListArgs = {
  input: Api_InvoiceBatch_ListInput;
};


export type QueryApi_Invoice_AggregateArgs = {
  input: Api_Invoice_AggregateInput;
};


export type QueryApi_Invoice_GetArgs = {
  input: Api_Invoice_GetInput;
};


export type QueryApi_Invoice_GroupByArgs = {
  input: Api_Invoice_GroupByInput;
};


export type QueryApi_Invoice_ListArgs = {
  input: Api_Invoice_ListInput;
};


export type QueryApi_Member_AggregateArgs = {
  input: Api_Member_AggregateInput;
};


export type QueryApi_Member_GetArgs = {
  input: Api_Member_GetInput;
};


export type QueryApi_Member_GroupByArgs = {
  input: Api_Member_GroupByInput;
};


export type QueryApi_Member_ListArgs = {
  input: Api_Member_ListInput;
};


export type QueryApi_Note_GetArgs = {
  input: Api_Note_GetInput;
};


export type QueryApi_Note_ListArgs = {
  input: Api_Note_ListInput;
};


export type QueryApi_ProductFulfillment_AggregateArgs = {
  input: Api_ProductFulfillment_AggregateInput;
};


export type QueryApi_ProductFulfillment_GetArgs = {
  input: Api_ProductFulfillment_GetInput;
};


export type QueryApi_ProductFulfillment_GroupByArgs = {
  input: Api_ProductFulfillment_GroupByInput;
};


export type QueryApi_ProductFulfillment_ListArgs = {
  input: Api_ProductFulfillment_ListInput;
};


export type QueryApi_ServicePurchase_AggregateArgs = {
  input: Api_ServicePurchase_AggregateInput;
};


export type QueryApi_ServicePurchase_GetArgs = {
  input: Api_ServicePurchase_GetInput;
};


export type QueryApi_ServicePurchase_GroupByArgs = {
  input: Api_ServicePurchase_GroupByInput;
};


export type QueryApi_ServicePurchase_ListArgs = {
  input: Api_ServicePurchase_ListInput;
};


export type QueryApi_Society_GetArgs = {
  input: Api_Society_GetInput;
};


export type QueryApi_Society_ListArgs = {
  input: Api_Society_ListInput;
};


export type QueryApi_TimecheckArgs = {
  input: Api_TimecheckInput;
};


export type QueryApi_Wpportaluser_GetArgs = {
  input: Api_Wpportaluser_GetInput;
};


export type QueryApi_Wpportaluser_ListArgs = {
  input: Api_Wpportaluser_ListInput;
};


export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type QueryApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  orderBy?: Array<ApplicationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ApplicationWhereInput;
};


export type QueryApplicationsCountArgs = {
  where?: ApplicationWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: Array<FileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FileWhereInput;
};


export type QueryFilesCountArgs = {
  where?: FileWhereInput;
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};


export type QueryGroupMemberFlagArgs = {
  where: GroupMemberFlagWhereUniqueInput;
};


export type QueryGroupMemberFlagsArgs = {
  cursor?: InputMaybe<GroupMemberFlagWhereUniqueInput>;
  orderBy?: Array<GroupMemberFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberFlagWhereInput;
};


export type QueryGroupMemberFlagsCountArgs = {
  where?: GroupMemberFlagWhereInput;
};


export type QueryGroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type QueryGroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};


export type QueryGroup_GetArgs = {
  input: Group_GetInput;
};


export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  orderBy?: Array<GroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupWhereInput;
};


export type QueryGroupsCountArgs = {
  where?: GroupWhereInput;
};


export type QueryInvoiceBatchArgs = {
  where: InvoiceBatchWhereUniqueInput;
};


export type QueryInvoiceBatchesArgs = {
  cursor?: InputMaybe<InvoiceBatchWhereUniqueInput>;
  orderBy?: Array<InvoiceBatchOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvoiceBatchWhereInput;
};


export type QueryInvoiceBatchesCountArgs = {
  where?: InvoiceBatchWhereInput;
};


export type QueryInvoiceEntriesArgs = {
  cursor?: InputMaybe<InvoiceEntryWhereUniqueInput>;
  orderBy?: Array<InvoiceEntryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvoiceEntryWhereInput;
};


export type QueryInvoiceEntriesCountArgs = {
  where?: InvoiceEntryWhereInput;
};


export type QueryInvoiceEntryArgs = {
  where: InvoiceEntryWhereUniqueInput;
};


export type QueryMailSendLogArgs = {
  where: MailSendLogWhereUniqueInput;
};


export type QueryMailSendLogsArgs = {
  cursor?: InputMaybe<MailSendLogWhereUniqueInput>;
  orderBy?: Array<MailSendLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MailSendLogWhereInput;
};


export type QueryMailSendLogsCountArgs = {
  where?: MailSendLogWhereInput;
};


export type QueryMailTrackHistoriesArgs = {
  cursor?: InputMaybe<MailTrackHistoryWhereUniqueInput>;
  orderBy?: Array<MailTrackHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MailTrackHistoryWhereInput;
};


export type QueryMailTrackHistoriesCountArgs = {
  where?: MailTrackHistoryWhereInput;
};


export type QueryMailTrackHistoryArgs = {
  where: MailTrackHistoryWhereUniqueInput;
};


export type QueryNetforumLogArgs = {
  where: NetforumLogWhereUniqueInput;
};


export type QueryNetforumLogsArgs = {
  cursor?: InputMaybe<NetforumLogWhereUniqueInput>;
  orderBy?: Array<NetforumLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: NetforumLogWhereInput;
};


export type QueryNetforumLogsCountArgs = {
  where?: NetforumLogWhereInput;
};


export type QueryProductFulfillmentArgs = {
  where: ProductFulfillmentWhereUniqueInput;
};


export type QueryProductFulfillmentsArgs = {
  cursor?: InputMaybe<ProductFulfillmentWhereUniqueInput>;
  orderBy?: Array<ProductFulfillmentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductFulfillmentWhereInput;
};


export type QueryProductFulfillmentsCountArgs = {
  where?: ProductFulfillmentWhereInput;
};


export type QueryServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};


export type QueryServerErrorsArgs = {
  cursor?: InputMaybe<ServerErrorWhereUniqueInput>;
  orderBy?: Array<ServerErrorOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerErrorWhereInput;
};


export type QueryServerErrorsCountArgs = {
  where?: ServerErrorWhereInput;
};


export type QueryServerLogArgs = {
  where: ServerLogWhereUniqueInput;
};


export type QueryServerLogsArgs = {
  cursor?: InputMaybe<ServerLogWhereUniqueInput>;
  orderBy?: Array<ServerLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerLogWhereInput;
};


export type QueryServerLogsCountArgs = {
  where?: ServerLogWhereInput;
};


export type QueryServicePurchaseArgs = {
  where: ServicePurchaseWhereUniqueInput;
};


export type QueryServicePurchasesArgs = {
  cursor?: InputMaybe<ServicePurchaseWhereUniqueInput>;
  orderBy?: Array<ServicePurchaseOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServicePurchaseWhereInput;
};


export type QueryServicePurchasesCountArgs = {
  where?: ServicePurchaseWhereInput;
};


export type QuerySocietiesArgs = {
  cursor?: InputMaybe<SocietyWhereUniqueInput>;
  orderBy?: Array<SocietyOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SocietyWhereInput;
};


export type QuerySocietiesCountArgs = {
  where?: SocietyWhereInput;
};


export type QuerySocietyArgs = {
  where: SocietyWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserEducationRecordArgs = {
  where: UserEducationRecordWhereUniqueInput;
};


export type QueryUserEducationRecordsArgs = {
  cursor?: InputMaybe<UserEducationRecordWhereUniqueInput>;
  orderBy?: Array<UserEducationRecordOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserEducationRecordWhereInput;
};


export type QueryUserEducationRecordsCountArgs = {
  where?: UserEducationRecordWhereInput;
};


export type QueryUserFlagArgs = {
  where: UserFlagWhereUniqueInput;
};


export type QueryUserFlagsArgs = {
  cursor?: InputMaybe<UserFlagWhereUniqueInput>;
  orderBy?: Array<UserFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserFlagWhereInput;
};


export type QueryUserFlagsCountArgs = {
  where?: UserFlagWhereInput;
};


export type QueryUserLoginHistoriesArgs = {
  cursor?: InputMaybe<UserLoginHistoryWhereUniqueInput>;
  orderBy?: Array<UserLoginHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserLoginHistoryWhereInput;
};


export type QueryUserLoginHistoriesCountArgs = {
  where?: UserLoginHistoryWhereInput;
};


export type QueryUserLoginHistoryArgs = {
  where: UserLoginHistoryWhereUniqueInput;
};


export type QueryUserNoteArgs = {
  where: UserNoteWhereUniqueInput;
};


export type QueryUserNotesArgs = {
  cursor?: InputMaybe<UserNoteWhereUniqueInput>;
  orderBy?: Array<UserNoteOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserNoteWhereInput;
};


export type QueryUserNotesCountArgs = {
  where?: UserNoteWhereInput;
};


export type QueryUserSystemFlagArgs = {
  where: UserSystemFlagWhereUniqueInput;
};


export type QueryUserSystemFlagsArgs = {
  cursor?: InputMaybe<UserSystemFlagWhereUniqueInput>;
  orderBy?: Array<UserSystemFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserSystemFlagWhereInput;
};


export type QueryUserSystemFlagsCountArgs = {
  where?: UserSystemFlagWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryWpLogArgs = {
  where: WpLogWhereUniqueInput;
};


export type QueryWpLogsArgs = {
  cursor?: InputMaybe<WpLogWhereUniqueInput>;
  orderBy?: Array<WpLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: WpLogWhereInput;
};


export type QueryWpLogsCountArgs = {
  where?: WpLogWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ServerError = {
  __typename?: 'ServerError';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  graphql?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type ServerErrorCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerErrorOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  errorMessage?: InputMaybe<OrderDirection>;
  graphql?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
  userID?: InputMaybe<OrderDirection>;
};

export type ServerErrorUpdateArgs = {
  data: ServerErrorUpdateInput;
  where: ServerErrorWhereUniqueInput;
};

export type ServerErrorUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerErrorWhereInput = {
  AND?: InputMaybe<Array<ServerErrorWhereInput>>;
  NOT?: InputMaybe<Array<ServerErrorWhereInput>>;
  OR?: InputMaybe<Array<ServerErrorWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  graphql?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userID?: InputMaybe<StringFilter>;
};

export type ServerErrorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ServerLog = {
  __typename?: 'ServerLog';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  elapsed?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  graphql?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type ServerLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  elapsed?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  elapsed?: InputMaybe<OrderDirection>;
  errorMessage?: InputMaybe<OrderDirection>;
  graphql?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
  userID?: InputMaybe<OrderDirection>;
};

export type ServerLogUpdateArgs = {
  data: ServerLogUpdateInput;
  where: ServerLogWhereUniqueInput;
};

export type ServerLogUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  elapsed?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerLogWhereInput = {
  AND?: InputMaybe<Array<ServerLogWhereInput>>;
  NOT?: InputMaybe<Array<ServerLogWhereInput>>;
  OR?: InputMaybe<Array<ServerLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  elapsed?: InputMaybe<StringFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  graphql?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userID?: InputMaybe<StringFilter>;
};

export type ServerLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ServicePurchase = {
  __typename?: 'ServicePurchase';
  balanceDue?: Maybe<Scalars['Float']['output']>;
  cancelled?: Maybe<Scalars['Boolean']['output']>;
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ServicePurchaseCreateInput = {
  balanceDue?: InputMaybe<Scalars['Float']['input']>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelledAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ServicePurchaseOrderByInput = {
  balanceDue?: InputMaybe<OrderDirection>;
  cancelled?: InputMaybe<OrderDirection>;
  cancelledAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  product?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type ServicePurchaseUpdateArgs = {
  data: ServicePurchaseUpdateInput;
  where: ServicePurchaseWhereUniqueInput;
};

export type ServicePurchaseUpdateInput = {
  balanceDue?: InputMaybe<Scalars['Float']['input']>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelledAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ServicePurchaseWhereInput = {
  AND?: InputMaybe<Array<ServicePurchaseWhereInput>>;
  NOT?: InputMaybe<Array<ServicePurchaseWhereInput>>;
  OR?: InputMaybe<Array<ServicePurchaseWhereInput>>;
  balanceDue?: InputMaybe<FloatNullableFilter>;
  cancelled?: InputMaybe<BooleanFilter>;
  cancelledAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  note?: InputMaybe<StringFilter>;
  product?: InputMaybe<StringFilter>;
  total?: InputMaybe<FloatNullableFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ServicePurchaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Society = {
  __typename?: 'Society';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SocietyCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SocietyOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SocietyUpdateArgs = {
  data: SocietyUpdateInput;
  where: SocietyWhereUniqueInput;
};

export type SocietyUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SocietyWhereInput = {
  AND?: InputMaybe<Array<SocietyWhereInput>>;
  NOT?: InputMaybe<Array<SocietyWhereInput>>;
  OR?: InputMaybe<Array<SocietyWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type SocietyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  nf_sync_log?: Maybe<Nf_Sync_Log>;
  ping_time?: Maybe<Time>;
};

export type Time = {
  __typename?: 'Time';
  data?: Maybe<Scalars['String']['output']>;
  iso?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  adminPassword?: Maybe<PasswordState>;
  avatar?: Maybe<ImageFieldOutput>;
  business_addressLine1?: Maybe<Scalars['String']['output']>;
  business_addressLine2?: Maybe<Scalars['String']['output']>;
  business_city?: Maybe<Scalars['String']['output']>;
  business_country?: Maybe<Scalars['String']['output']>;
  business_phoneNumber?: Maybe<Scalars['String']['output']>;
  business_postalCode?: Maybe<Scalars['String']['output']>;
  business_state?: Maybe<Scalars['String']['output']>;
  cell_phoneNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dental_degree?: Maybe<Scalars['String']['output']>;
  dental_graduationYear?: Maybe<Scalars['String']['output']>;
  dental_school?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  educationRecords?: Maybe<Array<UserEducationRecord>>;
  educationRecordsCount?: Maybe<Scalars['Int']['output']>;
  educportal_id?: Maybe<Scalars['String']['output']>;
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  flags?: Maybe<Array<UserFlag>>;
  flagsCount?: Maybe<Scalars['Int']['output']>;
  groups?: Maybe<Array<GroupMember>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  home_addressLine1?: Maybe<Scalars['String']['output']>;
  home_addressLine2?: Maybe<Scalars['String']['output']>;
  home_city?: Maybe<Scalars['String']['output']>;
  home_country?: Maybe<Scalars['String']['output']>;
  home_phoneNumber?: Maybe<Scalars['String']['output']>;
  home_postalCode?: Maybe<Scalars['String']['output']>;
  home_state?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  importFrom?: Maybe<Scalars['String']['output']>;
  isBlacklisted?: Maybe<Scalars['Boolean']['output']>;
  joinDate?: Maybe<Scalars['DateTime']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  loginHistory?: Maybe<Array<UserLoginHistory>>;
  loginHistoryCount?: Maybe<Scalars['Int']['output']>;
  memberPackage?: Maybe<Scalars['String']['output']>;
  memberType?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  netforum_cstKey?: Maybe<Scalars['String']['output']>;
  netforum_recno?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<UserNote>>;
  notesCount?: Maybe<Scalars['Int']['output']>;
  ortho_degree?: Maybe<Scalars['String']['output']>;
  ortho_graduationYear?: Maybe<Scalars['String']['output']>;
  ortho_school?: Maybe<Scalars['String']['output']>;
  postgraduate_degree?: Maybe<Scalars['String']['output']>;
  postgraduate_graduationYear?: Maybe<Scalars['String']['output']>;
  postgraduate_school?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  rejoinDate?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UserRoleType>;
  society?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  systemFlags?: Maybe<Array<UserSystemFlag>>;
  systemFlagsCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserEducationRecordsArgs = {
  cursor?: InputMaybe<UserEducationRecordWhereUniqueInput>;
  orderBy?: Array<UserEducationRecordOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserEducationRecordWhereInput;
};


export type UserEducationRecordsCountArgs = {
  where?: UserEducationRecordWhereInput;
};


export type UserFlagsArgs = {
  cursor?: InputMaybe<UserFlagWhereUniqueInput>;
  orderBy?: Array<UserFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserFlagWhereInput;
};


export type UserFlagsCountArgs = {
  where?: UserFlagWhereInput;
};


export type UserGroupsArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type UserGroupsCountArgs = {
  where?: GroupMemberWhereInput;
};


export type UserLoginHistoryArgs = {
  cursor?: InputMaybe<UserLoginHistoryWhereUniqueInput>;
  orderBy?: Array<UserLoginHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserLoginHistoryWhereInput;
};


export type UserLoginHistoryCountArgs = {
  where?: UserLoginHistoryWhereInput;
};


export type UserNotesArgs = {
  cursor?: InputMaybe<UserNoteWhereUniqueInput>;
  orderBy?: Array<UserNoteOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserNoteWhereInput;
};


export type UserNotesCountArgs = {
  where?: UserNoteWhereInput;
};


export type UserSystemFlagsArgs = {
  cursor?: InputMaybe<UserSystemFlagWhereUniqueInput>;
  orderBy?: Array<UserSystemFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserSystemFlagWhereInput;
};


export type UserSystemFlagsCountArgs = {
  where?: UserSystemFlagWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<ImageFieldInput>;
  business_addressLine1?: InputMaybe<Scalars['String']['input']>;
  business_addressLine2?: InputMaybe<Scalars['String']['input']>;
  business_city?: InputMaybe<Scalars['String']['input']>;
  business_country?: InputMaybe<Scalars['String']['input']>;
  business_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  business_postalCode?: InputMaybe<Scalars['String']['input']>;
  business_state?: InputMaybe<Scalars['String']['input']>;
  cell_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dental_degree?: InputMaybe<Scalars['String']['input']>;
  dental_graduationYear?: InputMaybe<Scalars['String']['input']>;
  dental_school?: InputMaybe<Scalars['String']['input']>;
  educationRecords?: InputMaybe<UserEducationRecordRelateToManyForCreateInput>;
  educportal_id?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
  flags?: InputMaybe<UserFlagRelateToManyForCreateInput>;
  groups?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  home_addressLine1?: InputMaybe<Scalars['String']['input']>;
  home_addressLine2?: InputMaybe<Scalars['String']['input']>;
  home_city?: InputMaybe<Scalars['String']['input']>;
  home_country?: InputMaybe<Scalars['String']['input']>;
  home_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  home_postalCode?: InputMaybe<Scalars['String']['input']>;
  home_state?: InputMaybe<Scalars['String']['input']>;
  importFrom?: InputMaybe<Scalars['String']['input']>;
  isBlacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  joinDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loginHistory?: InputMaybe<UserLoginHistoryRelateToManyForCreateInput>;
  memberPackage?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  netforum_cstKey?: InputMaybe<Scalars['String']['input']>;
  netforum_recno?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<UserNoteRelateToManyForCreateInput>;
  ortho_degree?: InputMaybe<Scalars['String']['input']>;
  ortho_graduationYear?: InputMaybe<Scalars['String']['input']>;
  ortho_school?: InputMaybe<Scalars['String']['input']>;
  postgraduate_degree?: InputMaybe<Scalars['String']['input']>;
  postgraduate_graduationYear?: InputMaybe<Scalars['String']['input']>;
  postgraduate_school?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  rejoinDate?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<UserRoleType>;
  society?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  systemFlags?: InputMaybe<UserSystemFlagRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserEducationRecord = {
  __typename?: 'UserEducationRecord';
  achievement?: Maybe<Scalars['String']['output']>;
  courseID?: Maybe<Scalars['String']['output']>;
  dateOfAchievement?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  schoolName?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserEducationRecordCreateInput = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  courseID?: InputMaybe<Scalars['String']['input']>;
  dateOfAchievement?: InputMaybe<Scalars['DateTime']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserEducationRecordManyRelationFilter = {
  every?: InputMaybe<UserEducationRecordWhereInput>;
  none?: InputMaybe<UserEducationRecordWhereInput>;
  some?: InputMaybe<UserEducationRecordWhereInput>;
};

export type UserEducationRecordOrderByInput = {
  achievement?: InputMaybe<OrderDirection>;
  courseID?: InputMaybe<OrderDirection>;
  dateOfAchievement?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  schoolName?: InputMaybe<OrderDirection>;
};

export type UserEducationRecordRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserEducationRecordWhereUniqueInput>>;
  create?: InputMaybe<Array<UserEducationRecordCreateInput>>;
};

export type UserEducationRecordRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserEducationRecordWhereUniqueInput>>;
  create?: InputMaybe<Array<UserEducationRecordCreateInput>>;
  disconnect?: InputMaybe<Array<UserEducationRecordWhereUniqueInput>>;
  set?: InputMaybe<Array<UserEducationRecordWhereUniqueInput>>;
};

export type UserEducationRecordUpdateArgs = {
  data: UserEducationRecordUpdateInput;
  where: UserEducationRecordWhereUniqueInput;
};

export type UserEducationRecordUpdateInput = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  courseID?: InputMaybe<Scalars['String']['input']>;
  dateOfAchievement?: InputMaybe<Scalars['DateTime']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserEducationRecordWhereInput = {
  AND?: InputMaybe<Array<UserEducationRecordWhereInput>>;
  NOT?: InputMaybe<Array<UserEducationRecordWhereInput>>;
  OR?: InputMaybe<Array<UserEducationRecordWhereInput>>;
  achievement?: InputMaybe<StringFilter>;
  courseID?: InputMaybe<StringFilter>;
  dateOfAchievement?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  schoolName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserEducationRecordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserFlag = {
  __typename?: 'UserFlag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserFlagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserFlagManyRelationFilter = {
  every?: InputMaybe<UserFlagWhereInput>;
  none?: InputMaybe<UserFlagWhereInput>;
  some?: InputMaybe<UserFlagWhereInput>;
};

export type UserFlagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  key?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type UserFlagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserFlagCreateInput>>;
};

export type UserFlagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserFlagCreateInput>>;
  disconnect?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
  set?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
};

export type UserFlagUpdateArgs = {
  data: UserFlagUpdateInput;
  where: UserFlagWhereUniqueInput;
};

export type UserFlagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserFlagWhereInput = {
  AND?: InputMaybe<Array<UserFlagWhereInput>>;
  NOT?: InputMaybe<Array<UserFlagWhereInput>>;
  OR?: InputMaybe<Array<UserFlagWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<StringFilter>;
};

export type UserFlagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserLoginHistory = {
  __typename?: 'UserLoginHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type UserLoginHistoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginHistoryManyRelationFilter = {
  every?: InputMaybe<UserLoginHistoryWhereInput>;
  none?: InputMaybe<UserLoginHistoryWhereInput>;
  some?: InputMaybe<UserLoginHistoryWhereInput>;
};

export type UserLoginHistoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ipAddress?: InputMaybe<OrderDirection>;
  userAgent?: InputMaybe<OrderDirection>;
};

export type UserLoginHistoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<UserLoginHistoryCreateInput>>;
};

export type UserLoginHistoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<UserLoginHistoryCreateInput>>;
  disconnect?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
};

export type UserLoginHistoryUpdateArgs = {
  data: UserLoginHistoryUpdateInput;
  where: UserLoginHistoryWhereUniqueInput;
};

export type UserLoginHistoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginHistoryWhereInput = {
  AND?: InputMaybe<Array<UserLoginHistoryWhereInput>>;
  NOT?: InputMaybe<Array<UserLoginHistoryWhereInput>>;
  OR?: InputMaybe<Array<UserLoginHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ipAddress?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userAgent?: InputMaybe<StringFilter>;
};

export type UserLoginHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserNote = {
  __typename?: 'UserNote';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserNoteCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserNoteManyRelationFilter = {
  every?: InputMaybe<UserNoteWhereInput>;
  none?: InputMaybe<UserNoteWhereInput>;
  some?: InputMaybe<UserNoteWhereInput>;
};

export type UserNoteOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type UserNoteRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserNoteWhereUniqueInput>>;
  create?: InputMaybe<Array<UserNoteCreateInput>>;
};

export type UserNoteRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserNoteWhereUniqueInput>>;
  create?: InputMaybe<Array<UserNoteCreateInput>>;
  disconnect?: InputMaybe<Array<UserNoteWhereUniqueInput>>;
  set?: InputMaybe<Array<UserNoteWhereUniqueInput>>;
};

export type UserNoteUpdateArgs = {
  data: UserNoteUpdateInput;
  where: UserNoteWhereUniqueInput;
};

export type UserNoteUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserNoteWhereInput = {
  AND?: InputMaybe<Array<UserNoteWhereInput>>;
  NOT?: InputMaybe<Array<UserNoteWhereInput>>;
  OR?: InputMaybe<Array<UserNoteWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  metadata?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserNoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserOrderByInput = {
  about?: InputMaybe<OrderDirection>;
  business_addressLine1?: InputMaybe<OrderDirection>;
  business_addressLine2?: InputMaybe<OrderDirection>;
  business_city?: InputMaybe<OrderDirection>;
  business_country?: InputMaybe<OrderDirection>;
  business_phoneNumber?: InputMaybe<OrderDirection>;
  business_postalCode?: InputMaybe<OrderDirection>;
  business_state?: InputMaybe<OrderDirection>;
  cell_phoneNumber?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  dental_degree?: InputMaybe<OrderDirection>;
  dental_graduationYear?: InputMaybe<OrderDirection>;
  dental_school?: InputMaybe<OrderDirection>;
  educportal_id?: InputMaybe<OrderDirection>;
  effectiveDate?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  expirationDate?: InputMaybe<OrderDirection>;
  home_addressLine1?: InputMaybe<OrderDirection>;
  home_addressLine2?: InputMaybe<OrderDirection>;
  home_city?: InputMaybe<OrderDirection>;
  home_country?: InputMaybe<OrderDirection>;
  home_phoneNumber?: InputMaybe<OrderDirection>;
  home_postalCode?: InputMaybe<OrderDirection>;
  home_state?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  importFrom?: InputMaybe<OrderDirection>;
  isBlacklisted?: InputMaybe<OrderDirection>;
  joinDate?: InputMaybe<OrderDirection>;
  lastLogin?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  memberPackage?: InputMaybe<OrderDirection>;
  memberType?: InputMaybe<OrderDirection>;
  middleName?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  netforum_cstKey?: InputMaybe<OrderDirection>;
  netforum_recno?: InputMaybe<OrderDirection>;
  ortho_degree?: InputMaybe<OrderDirection>;
  ortho_graduationYear?: InputMaybe<OrderDirection>;
  ortho_school?: InputMaybe<OrderDirection>;
  postgraduate_degree?: InputMaybe<OrderDirection>;
  postgraduate_graduationYear?: InputMaybe<OrderDirection>;
  postgraduate_school?: InputMaybe<OrderDirection>;
  prefix?: InputMaybe<OrderDirection>;
  rejoinDate?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  society?: InputMaybe<OrderDirection>;
  suffix?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Dev = 'dev',
  User = 'user'
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export type UserSystemFlag = {
  __typename?: 'UserSystemFlag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserSystemFlagCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserSystemFlagManyRelationFilter = {
  every?: InputMaybe<UserSystemFlagWhereInput>;
  none?: InputMaybe<UserSystemFlagWhereInput>;
  some?: InputMaybe<UserSystemFlagWhereInput>;
};

export type UserSystemFlagOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  key?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type UserSystemFlagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserSystemFlagCreateInput>>;
};

export type UserSystemFlagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserSystemFlagCreateInput>>;
  disconnect?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
};

export type UserSystemFlagUpdateArgs = {
  data: UserSystemFlagUpdateInput;
  where: UserSystemFlagWhereUniqueInput;
};

export type UserSystemFlagUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserSystemFlagWhereInput = {
  AND?: InputMaybe<Array<UserSystemFlagWhereInput>>;
  NOT?: InputMaybe<Array<UserSystemFlagWhereInput>>;
  OR?: InputMaybe<Array<UserSystemFlagWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<StringFilter>;
};

export type UserSystemFlagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<ImageFieldInput>;
  business_addressLine1?: InputMaybe<Scalars['String']['input']>;
  business_addressLine2?: InputMaybe<Scalars['String']['input']>;
  business_city?: InputMaybe<Scalars['String']['input']>;
  business_country?: InputMaybe<Scalars['String']['input']>;
  business_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  business_postalCode?: InputMaybe<Scalars['String']['input']>;
  business_state?: InputMaybe<Scalars['String']['input']>;
  cell_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dental_degree?: InputMaybe<Scalars['String']['input']>;
  dental_graduationYear?: InputMaybe<Scalars['String']['input']>;
  dental_school?: InputMaybe<Scalars['String']['input']>;
  educationRecords?: InputMaybe<UserEducationRecordRelateToManyForUpdateInput>;
  educportal_id?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
  flags?: InputMaybe<UserFlagRelateToManyForUpdateInput>;
  groups?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  home_addressLine1?: InputMaybe<Scalars['String']['input']>;
  home_addressLine2?: InputMaybe<Scalars['String']['input']>;
  home_city?: InputMaybe<Scalars['String']['input']>;
  home_country?: InputMaybe<Scalars['String']['input']>;
  home_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  home_postalCode?: InputMaybe<Scalars['String']['input']>;
  home_state?: InputMaybe<Scalars['String']['input']>;
  importFrom?: InputMaybe<Scalars['String']['input']>;
  isBlacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  joinDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loginHistory?: InputMaybe<UserLoginHistoryRelateToManyForUpdateInput>;
  memberPackage?: InputMaybe<Scalars['String']['input']>;
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  netforum_cstKey?: InputMaybe<Scalars['String']['input']>;
  netforum_recno?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<UserNoteRelateToManyForUpdateInput>;
  ortho_degree?: InputMaybe<Scalars['String']['input']>;
  ortho_graduationYear?: InputMaybe<Scalars['String']['input']>;
  ortho_school?: InputMaybe<Scalars['String']['input']>;
  postgraduate_degree?: InputMaybe<Scalars['String']['input']>;
  postgraduate_graduationYear?: InputMaybe<Scalars['String']['input']>;
  postgraduate_school?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  rejoinDate?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<UserRoleType>;
  society?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  systemFlags?: InputMaybe<UserSystemFlagRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringFilter>;
  adminPassword?: InputMaybe<PasswordFilter>;
  business_addressLine1?: InputMaybe<StringFilter>;
  business_addressLine2?: InputMaybe<StringFilter>;
  business_city?: InputMaybe<StringFilter>;
  business_country?: InputMaybe<StringFilter>;
  business_phoneNumber?: InputMaybe<StringFilter>;
  business_postalCode?: InputMaybe<StringFilter>;
  business_state?: InputMaybe<StringFilter>;
  cell_phoneNumber?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dental_degree?: InputMaybe<StringFilter>;
  dental_graduationYear?: InputMaybe<StringFilter>;
  dental_school?: InputMaybe<StringFilter>;
  educationRecords?: InputMaybe<UserEducationRecordManyRelationFilter>;
  educportal_id?: InputMaybe<StringFilter>;
  effectiveDate?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  expirationDate?: InputMaybe<DateTimeNullableFilter>;
  flags?: InputMaybe<UserFlagManyRelationFilter>;
  groups?: InputMaybe<GroupMemberManyRelationFilter>;
  home_addressLine1?: InputMaybe<StringFilter>;
  home_addressLine2?: InputMaybe<StringFilter>;
  home_city?: InputMaybe<StringFilter>;
  home_country?: InputMaybe<StringFilter>;
  home_phoneNumber?: InputMaybe<StringFilter>;
  home_postalCode?: InputMaybe<StringFilter>;
  home_state?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  importFrom?: InputMaybe<StringFilter>;
  isBlacklisted?: InputMaybe<BooleanFilter>;
  joinDate?: InputMaybe<DateTimeNullableFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  loginHistory?: InputMaybe<UserLoginHistoryManyRelationFilter>;
  memberPackage?: InputMaybe<StringFilter>;
  memberType?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  netforum_cstKey?: InputMaybe<StringFilter>;
  netforum_recno?: InputMaybe<StringFilter>;
  notes?: InputMaybe<UserNoteManyRelationFilter>;
  ortho_degree?: InputMaybe<StringFilter>;
  ortho_graduationYear?: InputMaybe<StringFilter>;
  ortho_school?: InputMaybe<StringFilter>;
  postgraduate_degree?: InputMaybe<StringFilter>;
  postgraduate_graduationYear?: InputMaybe<StringFilter>;
  postgraduate_school?: InputMaybe<StringFilter>;
  prefix?: InputMaybe<StringFilter>;
  rejoinDate?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
  society?: InputMaybe<StringFilter>;
  suffix?: InputMaybe<StringFilter>;
  systemFlags?: InputMaybe<UserSystemFlagManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User_SetFlagInput = {
  data: Array<InputMaybe<User_SetFlagInputData>>;
};

export type User_SetFlagInputData = {
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type WpLog = {
  __typename?: 'WPLog';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
};

export type WpLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type WpLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  topic?: InputMaybe<OrderDirection>;
};

export type WpLogUpdateArgs = {
  data: WpLogUpdateInput;
  where: WpLogWhereUniqueInput;
};

export type WpLogUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type WpLogWhereInput = {
  AND?: InputMaybe<Array<WpLogWhereInput>>;
  NOT?: InputMaybe<Array<WpLogWhereInput>>;
  OR?: InputMaybe<Array<WpLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  metadata?: InputMaybe<StringFilter>;
  topic?: InputMaybe<StringFilter>;
};

export type WpLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Api_Sync_Crm_WordpressMutationVariables = Exact<{
  input: Api_Sync_Crm_WordpressInput;
}>;


export type Api_Sync_Crm_WordpressMutation = { __typename?: 'Mutation', api_sync_crm_wordpress?: { __typename?: 'Api_Sync_crm_wordpressOutput', success?: boolean | null } | null };

export type Api_Sync_Crm_NetforumMutationVariables = Exact<{
  input: Api_Sync_Crm_NetforumInput;
}>;


export type Api_Sync_Crm_NetforumMutation = { __typename?: 'Mutation', api_sync_crm_netforum?: { __typename?: 'Api_Sync_crm_netforumOutput', success?: boolean | null } | null };

export type Api_Sync_From_NetforumMutationVariables = Exact<{
  input: Api_Sync_From_NetforumInput;
}>;


export type Api_Sync_From_NetforumMutation = { __typename?: 'Mutation', api_sync_from_netforum?: { __typename?: 'Api_Sync_from_netforumOutput', count?: number | null } | null };

export type Api_Sync_From_WordpressMutationVariables = Exact<{
  input: Api_Sync_From_WordpressInput;
}>;


export type Api_Sync_From_WordpressMutation = { __typename?: 'Mutation', api_sync_from_wordpress?: { __typename?: 'Api_Sync_from_wordpressOutput', count?: number | null } | null };

export type Api_TimecheckQueryVariables = Exact<{
  input: Api_TimecheckInput;
}>;


export type Api_TimecheckQuery = { __typename?: 'Query', api_timecheck?: { __typename?: 'Api_TimecheckOutput', time?: string | null } | null };

export type Authclient_LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Authclient_LoginMutation = { __typename?: 'Mutation', authclient_login?: { __typename?: 'ClientItemAuthenticationWithPasswordFailure', message: string } | { __typename?: 'ClientItemAuthenticationWithPasswordSuccess', sessionToken: string } | null };

export type Authclient_RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
}>;


export type Authclient_RegisterMutation = { __typename?: 'Mutation', authclient_register?: boolean | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, name?: string | null, middleName?: string | null, lastName?: string | null, displayName?: string | null, email?: string | null, role?: UserRoleType | null, createdAt?: any | null, lastLogin?: any | null } | null };

export type Authclient_ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type Authclient_ChangePasswordMutation = { __typename?: 'Mutation', authclient_changePassword?: boolean | null };

export type Authclient_RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type Authclient_RequestPasswordResetMutation = { __typename?: 'Mutation', authclient_requestPasswordReset?: boolean | null };

export type Authclient_ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Authclient_ResetPasswordMutation = { __typename?: 'Mutation', authclient_resetPassword?: boolean | null };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name?: string | null, lastName?: string | null, displayName?: string | null, email?: string | null, role?: UserRoleType | null, lastLogin?: any | null } | null };

export type Education_ListQueryVariables = Exact<{
  input: Api_Education_ListInput;
}>;


export type Education_ListQuery = { __typename?: 'Query', api_education_list?: { __typename?: 'Api_Education_listOutput', data?: Array<{ __typename?: 'Api_Education_listOutputData', id?: string | null, userId?: string | null, userName?: string | null, schoolName?: string | null, achievement?: string | null, dateOfAchievement?: string | null } | null> | null, page?: { __typename?: 'Api_Education_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Education_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Education_AggregateQueryVariables = Exact<{
  input: Api_Education_AggregateInput;
}>;


export type Education_AggregateQuery = { __typename?: 'Query', api_education_aggregate?: { __typename?: 'Api_Education_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Education_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type Education_GroupByQueryVariables = Exact<{
  input: Api_Education_GroupByInput;
}>;


export type Education_GroupByQuery = { __typename?: 'Query', api_education_groupBy?: { __typename?: 'Api_Education_groupByOutput', breakdown?: Array<{ __typename?: 'Api_Education_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Education_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Education_GetQueryVariables = Exact<{
  input: Api_Education_GetInput;
}>;


export type Education_GetQuery = { __typename?: 'Query', api_education_get?: { __typename?: 'Api_Education_getOutput', data?: { __typename?: 'Api_Education_getOutputData', id?: string | null, userId?: string | null, userName?: string | null, schoolName?: string | null, achievement?: string | null, dateOfAchievement?: string | null } | null } | null };

export type Education_CreateMutationVariables = Exact<{
  input: Api_Education_CreateInput;
}>;


export type Education_CreateMutation = { __typename?: 'Mutation', api_education_create?: { __typename?: 'Api_Education_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Education_UpdateMutationVariables = Exact<{
  input: Api_Education_UpdateInput;
}>;


export type Education_UpdateMutation = { __typename?: 'Mutation', api_education_update?: { __typename?: 'Api_Education_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Education_DeleteMutationVariables = Exact<{
  input: Api_Education_DeleteInput;
}>;


export type Education_DeleteMutation = { __typename?: 'Mutation', api_education_delete?: { __typename?: 'Api_Education_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Events_ListQueryVariables = Exact<{
  input: Api_Event_ListInput;
}>;


export type Events_ListQuery = { __typename?: 'Query', api_event_list?: { __typename?: 'Api_Event_listOutput', data?: Array<{ __typename?: 'Api_Event_listOutputData', id?: string | null, title?: string | null, description?: string | null, startDate?: string | null, endDate?: string | null, location?: string | null, isCancelled?: boolean | null, createdAt?: string | null, updatedAt?: string | null } | null> | null, page?: { __typename?: 'Api_Event_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Event_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Events_GetQueryVariables = Exact<{
  input: Api_Event_GetInput;
}>;


export type Events_GetQuery = { __typename?: 'Query', api_event_get?: { __typename?: 'Api_Event_getOutput', data?: { __typename?: 'Api_Event_getOutputData', id?: string | null, title?: string | null, description?: string | null, startDate?: string | null, endDate?: string | null, location?: string | null, isCancelled?: boolean | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type Events_CreateMutationVariables = Exact<{
  input: Api_Event_CreateInput;
}>;


export type Events_CreateMutation = { __typename?: 'Mutation', api_event_create?: { __typename?: 'Api_Event_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Events_UpdateMutationVariables = Exact<{
  input: Api_Event_UpdateInput;
}>;


export type Events_UpdateMutation = { __typename?: 'Mutation', api_event_update?: { __typename?: 'Api_Event_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Events_DeleteMutationVariables = Exact<{
  input: Api_Event_DeleteInput;
}>;


export type Events_DeleteMutation = { __typename?: 'Mutation', api_event_delete?: { __typename?: 'Api_Event_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Files_ListQueryVariables = Exact<{
  input: Api_File_ListInput;
}>;


export type Files_ListQuery = { __typename?: 'Query', api_file_list?: { __typename?: 'Api_File_listOutput', data?: Array<{ __typename?: 'Api_File_listOutputData', id?: string | null, assignedTo?: string | null, name?: string | null, url?: string | null, mime?: string | null, size?: string | null, metadata?: string | null, createdAt?: string | null, path?: string | null, category?: string | null, note?: string | null } | null> | null, page?: { __typename?: 'Api_File_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_File_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Files_GetQueryVariables = Exact<{
  input: Api_File_GetInput;
}>;


export type Files_GetQuery = { __typename?: 'Query', api_file_get?: { __typename?: 'Api_File_getOutput', data?: { __typename?: 'Api_File_getOutputData', id: string, assignedTo: string, name: string, url: string, mime: string, size: string, metadata: string, createdAt: string, path: string, category: string, note: string } | null } | null };

export type Files_CreateMutationVariables = Exact<{
  input: Api_File_CreateInput;
}>;


export type Files_CreateMutation = { __typename?: 'Mutation', api_file_create?: { __typename?: 'Api_File_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Files_UpdateMutationVariables = Exact<{
  input: Api_File_UpdateInput;
}>;


export type Files_UpdateMutation = { __typename?: 'Mutation', api_file_update?: { __typename?: 'Api_File_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Files_DeleteMutationVariables = Exact<{
  input: Api_File_DeleteInput;
}>;


export type Files_DeleteMutation = { __typename?: 'Mutation', api_file_delete?: { __typename?: 'Api_File_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type File_UploadMutationVariables = Exact<{
  input: File_UploadInput;
}>;


export type File_UploadMutation = { __typename?: 'Mutation', file_upload?: { __typename?: 'FileUploadOutput', files: Array<{ __typename?: 'FileUploadOutputFiles', id?: string | null, url: string, filename: string } | null> } | null };

export type File_UploadUrlMutationVariables = Exact<{
  input: File_UploadUrlInput;
}>;


export type File_UploadUrlMutation = { __typename?: 'Mutation', file_uploadURL?: { __typename?: 'FileUploadURLOutput', files: Array<{ __typename?: 'FileUploadURLOutputFiles', id?: string | null, uploadURL?: string | null, fileName?: string | null, viewURL?: string | null } | null> } | null };

export type Invoice_ListQueryVariables = Exact<{
  input: Api_Invoice_ListInput;
}>;


export type Invoice_ListQuery = { __typename?: 'Query', api_invoice_list?: { __typename?: 'Api_Invoice_listOutput', data?: Array<{ __typename?: 'Api_Invoice_listOutputData', id?: string | null, customerName?: string | null, total?: number | null, createdAt?: string | null, paidAt?: string | null, status?: string | null, paymentLink?: string | null, items?: Array<{ __typename?: 'Api_Invoice_listOutputDataItems', id: string, name: string, price: number, quantity: number } | null> | null } | null> | null, page?: { __typename?: 'Api_Invoice_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Invoice_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Invoice_GetQueryVariables = Exact<{
  input: Api_Invoice_GetInput;
}>;


export type Invoice_GetQuery = { __typename?: 'Query', api_invoice_get?: { __typename?: 'Api_Invoice_getOutput', data?: { __typename?: 'Api_Invoice_getOutputData', id?: string | null, customerName?: string | null, total?: number | null, createdAt?: string | null, paidAt?: string | null, status?: string | null, paymentLink?: string | null, items?: Array<{ __typename?: 'Api_Invoice_getOutputDataItems', id: string, name: string, price: number, quantity: number } | null> | null } | null } | null };

export type Invoice_CreateMutationVariables = Exact<{
  input: Api_Invoice_CreateInput;
}>;


export type Invoice_CreateMutation = { __typename?: 'Mutation', api_invoice_create?: { __typename?: 'Api_Invoice_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Invoice_UpdateMutationVariables = Exact<{
  input: Api_Invoice_UpdateInput;
}>;


export type Invoice_UpdateMutation = { __typename?: 'Mutation', api_invoice_update?: { __typename?: 'Api_Invoice_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Invoice_DeleteMutationVariables = Exact<{
  input: Api_Invoice_DeleteInput;
}>;


export type Invoice_DeleteMutation = { __typename?: 'Mutation', api_invoice_delete?: { __typename?: 'Api_Invoice_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type InvoiceBatch_ListQueryVariables = Exact<{
  input: Api_InvoiceBatch_ListInput;
}>;


export type InvoiceBatch_ListQuery = { __typename?: 'Query', api_invoiceBatch_list?: { __typename?: 'Api_InvoiceBatch_listOutput', data?: Array<{ __typename?: 'Api_InvoiceBatch_listOutputData', id?: string | null, customer?: string | null, batchID?: string | null, isOpen?: boolean | null, closedAt?: string | null, createdAt?: string | null } | null> | null, page?: { __typename?: 'Api_InvoiceBatch_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_InvoiceBatch_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Api_InvoiceBatch_GetQueryVariables = Exact<{
  input: Api_InvoiceBatch_GetInput;
}>;


export type Api_InvoiceBatch_GetQuery = { __typename?: 'Query', api_invoiceBatch_get?: { __typename?: 'Api_InvoiceBatch_getOutput', data?: { __typename?: 'Api_InvoiceBatch_getOutputData', id?: string | null, customer?: string | null, batchID?: string | null, isOpen?: boolean | null, closedAt?: string | null, createdAt?: string | null } | null } | null };

export type InvoiceBatch_CreateMutationVariables = Exact<{
  input: Api_InvoiceBatch_CreateInput;
}>;


export type InvoiceBatch_CreateMutation = { __typename?: 'Mutation', api_invoiceBatch_create?: { __typename?: 'Api_InvoiceBatch_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type InvoiceBatch_UpdateMutationVariables = Exact<{
  input: Api_InvoiceBatch_UpdateInput;
}>;


export type InvoiceBatch_UpdateMutation = { __typename?: 'Mutation', api_invoiceBatch_update?: { __typename?: 'Api_InvoiceBatch_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type InvoiceBatch_DeleteMutationVariables = Exact<{
  input: Api_InvoiceBatch_DeleteInput;
}>;


export type InvoiceBatch_DeleteMutation = { __typename?: 'Mutation', api_invoiceBatch_delete?: { __typename?: 'Api_InvoiceBatch_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Members_ListQueryVariables = Exact<{
  input: Api_Member_ListInput;
}>;


export type Members_ListQuery = { __typename?: 'Query', api_member_list?: { __typename?: 'Api_Member_listOutput', data?: Array<{ __typename?: 'Api_Member_listOutputData', id?: string | null, email?: string | null, createdAt?: string | null, updatedAt?: string | null, society?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, displayName?: string | null, prefix?: string | null, suffix?: string | null, avatar?: string | null, about?: string | null, home_phoneNumber?: string | null, business_phoneNumber?: string | null, cell_phoneNumber?: string | null, home_addressLine1?: string | null, home_addressLine2?: string | null, home_city?: string | null, home_state?: string | null, home_postalCode?: string | null, home_country?: string | null, business_addressLine1?: string | null, business_addressLine2?: string | null, business_city?: string | null, business_state?: string | null, business_postalCode?: string | null, business_country?: string | null, dental_degree?: string | null, dental_school?: string | null, dental_graduationYear?: string | null, ortho_degree?: string | null, ortho_school?: string | null, ortho_graduationYear?: string | null, postgraduate_degree?: string | null, postgraduate_school?: string | null, postgraduate_graduationYear?: string | null, joinDate?: string | null, rejoinDate?: string | null, effectiveDate?: string | null, expirationDate?: string | null, memberType?: string | null, memberPackage?: string | null, isBlacklisted?: boolean | null } | null> | null, page?: { __typename?: 'Api_Member_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Member_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Members_AggregateQueryVariables = Exact<{
  input: Api_Member_AggregateInput;
}>;


export type Members_AggregateQuery = { __typename?: 'Query', api_member_aggregate?: { __typename?: 'Api_Member_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Member_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type Members_GroupByQueryVariables = Exact<{
  input: Api_Member_GroupByInput;
}>;


export type Members_GroupByQuery = { __typename?: 'Query', api_member_groupBy?: { __typename?: 'Api_Member_groupByOutput', breakdown?: Array<{ __typename?: 'Api_Member_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Member_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Members_GetQueryVariables = Exact<{
  input: Api_Member_GetInput;
}>;


export type Members_GetQuery = { __typename?: 'Query', api_member_get?: { __typename?: 'Api_Member_getOutput', data?: { __typename?: 'Api_Member_getOutputData', id?: string | null, email?: string | null, createdAt?: string | null, updatedAt?: string | null, society?: string | null, about?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, displayName?: string | null, suffix?: string | null, prefix?: string | null, avatar?: string | null, home_phoneNumber?: string | null, business_phoneNumber?: string | null, cell_phoneNumber?: string | null, home_addressLine1?: string | null, home_addressLine2?: string | null, home_city?: string | null, home_state?: string | null, home_postalCode?: string | null, home_country?: string | null, business_addressLine1?: string | null, business_addressLine2?: string | null, business_city?: string | null, business_state?: string | null, business_postalCode?: string | null, business_country?: string | null, dental_degree?: string | null, dental_school?: string | null, dental_graduationYear?: string | null, ortho_degree?: string | null, ortho_school?: string | null, ortho_graduationYear?: string | null, postgraduate_degree?: string | null, postgraduate_school?: string | null, postgraduate_graduationYear?: string | null, joinDate?: string | null, rejoinDate?: string | null, effectiveDate?: string | null, expirationDate?: string | null, memberType?: string | null, memberPackage?: string | null, isBlacklisted?: boolean | null } | null } | null };

export type Members_CreateMutationVariables = Exact<{
  input: Api_Member_CreateInput;
}>;


export type Members_CreateMutation = { __typename?: 'Mutation', api_member_create?: { __typename?: 'Api_Member_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Members_UpdateMutationVariables = Exact<{
  input: Api_Member_UpdateInput;
}>;


export type Members_UpdateMutation = { __typename?: 'Mutation', api_member_update?: { __typename?: 'Api_Member_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Members_DeleteMutationVariables = Exact<{
  input: Api_Member_DeleteInput;
}>;


export type Members_DeleteMutation = { __typename?: 'Mutation', api_member_delete?: { __typename?: 'Api_Member_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Application_ListQueryVariables = Exact<{
  input: Api_Application_ListInput;
}>;


export type Application_ListQuery = { __typename?: 'Query', api_application_list?: { __typename?: 'Api_Application_listOutput', data?: Array<{ __typename?: 'Api_Application_listOutputData', id?: string | null, name?: string | null, email?: string | null, phoneNumber?: string | null, country?: string | null, applicationDate?: string | null, status?: string | null, memberType?: string | null, society?: string | null, createdAt?: string | null, updatedAt?: string | null } | null> | null, page?: { __typename?: 'Api_Application_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Application_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Application_GetQueryVariables = Exact<{
  input: Api_Application_GetInput;
}>;


export type Application_GetQuery = { __typename?: 'Query', api_application_get?: { __typename?: 'Api_Application_getOutput', data?: { __typename?: 'Api_Application_getOutputData', id?: string | null, name?: string | null, email?: string | null, phoneNumber?: string | null, country?: string | null, applicationDate?: string | null, status?: string | null, memberType?: string | null, society?: string | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type Application_CreateMutationVariables = Exact<{
  input: Api_Application_CreateInput;
}>;


export type Application_CreateMutation = { __typename?: 'Mutation', api_application_create?: { __typename?: 'Api_Application_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Application_UpdateMutationVariables = Exact<{
  input: Api_Application_UpdateInput;
}>;


export type Application_UpdateMutation = { __typename?: 'Mutation', api_application_update?: { __typename?: 'Api_Application_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Application_DeleteMutationVariables = Exact<{
  input: Api_Application_DeleteInput;
}>;


export type Application_DeleteMutation = { __typename?: 'Mutation', api_application_delete?: { __typename?: 'Api_Application_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Notes_ListQueryVariables = Exact<{
  input: Api_Note_ListInput;
}>;


export type Notes_ListQuery = { __typename?: 'Query', api_note_list?: { __typename?: 'Api_Note_listOutput', data?: Array<{ __typename?: 'Api_Note_listOutputData', id?: string | null, userId?: string | null, userName?: string | null, content?: string | null, type?: string | null, title?: string | null, metadata?: string | null, createdAt?: string | null } | null> | null, page?: { __typename?: 'Api_Note_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Note_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Notes_GetQueryVariables = Exact<{
  input: Api_Note_GetInput;
}>;


export type Notes_GetQuery = { __typename?: 'Query', api_note_get?: { __typename?: 'Api_Note_getOutput', data?: { __typename?: 'Api_Note_getOutputData', id?: string | null, userId?: string | null, userName?: string | null, content?: string | null, type?: string | null, title?: string | null, metadata?: string | null, createdAt?: string | null } | null } | null };

export type Notes_CreateMutationVariables = Exact<{
  input: Api_Note_CreateInput;
}>;


export type Notes_CreateMutation = { __typename?: 'Mutation', api_note_create?: { __typename?: 'Api_Note_createOutput', ids?: Array<string | null> | null, count?: number | null } | null };

export type Notes_UpdateMutationVariables = Exact<{
  input: Api_Note_UpdateInput;
}>;


export type Notes_UpdateMutation = { __typename?: 'Mutation', api_note_update?: { __typename?: 'Api_Note_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Notes_DeleteMutationVariables = Exact<{
  input: Api_Note_DeleteInput;
}>;


export type Notes_DeleteMutation = { __typename?: 'Mutation', api_note_delete?: { __typename?: 'Api_Note_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type ProductFulfillment_ListQueryVariables = Exact<{
  input: Api_ProductFulfillment_ListInput;
}>;


export type ProductFulfillment_ListQuery = { __typename?: 'Query', api_productFulfillment_list?: { __typename?: 'Api_ProductFulfillment_listOutput', data?: Array<{ __typename?: 'Api_ProductFulfillment_listOutputData', id?: string | null, product?: string | null, package?: string | null, price?: number | null, quantity?: number | null, total?: number | null, balance?: number | null, shipped?: boolean | null, returnedCancelled?: boolean | null, returnedCancelledAt?: string | null, note?: string | null } | null> | null, page?: { __typename?: 'Api_ProductFulfillment_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_ProductFulfillment_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Api_ProductFulfillment_GetQueryVariables = Exact<{
  input: Api_ProductFulfillment_GetInput;
}>;


export type Api_ProductFulfillment_GetQuery = { __typename?: 'Query', api_productFulfillment_get?: { __typename?: 'Api_ProductFulfillment_getOutput', data?: { __typename?: 'Api_ProductFulfillment_getOutputData', id?: string | null, product?: string | null, package?: string | null, price?: number | null, quantity?: number | null, total?: number | null, balance?: number | null, shipped?: boolean | null, returnedCancelled?: boolean | null, returnedCancelledAt?: string | null, note?: string | null } | null } | null };

export type ProductFulfillment_CreateMutationVariables = Exact<{
  input: Api_ProductFulfillment_CreateInput;
}>;


export type ProductFulfillment_CreateMutation = { __typename?: 'Mutation', api_productFulfillment_create?: { __typename?: 'Api_ProductFulfillment_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type ProductFulfillment_UpdateMutationVariables = Exact<{
  input: Api_ProductFulfillment_UpdateInput;
}>;


export type ProductFulfillment_UpdateMutation = { __typename?: 'Mutation', api_productFulfillment_update?: { __typename?: 'Api_ProductFulfillment_updateOutput', ids?: Array<string | null> | null, count?: number | null } | null };

export type ProductFulfillment_DeleteMutationVariables = Exact<{
  input: Api_ProductFulfillment_DeleteInput;
}>;


export type ProductFulfillment_DeleteMutation = { __typename?: 'Mutation', api_productFulfillment_delete?: { __typename?: 'Api_ProductFulfillment_deleteOutput', ids?: Array<string | null> | null, count?: number | null } | null };

export type Api_ProductFulfillment_AggregateQueryVariables = Exact<{
  input: Api_ProductFulfillment_AggregateInput;
}>;


export type Api_ProductFulfillment_AggregateQuery = { __typename?: 'Query', api_productFulfillment_aggregate?: { __typename?: 'Api_ProductFulfillment_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_ProductFulfillment_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type ProductFulfillment_GroupByQueryVariables = Exact<{
  input: Api_ProductFulfillment_GroupByInput;
}>;


export type ProductFulfillment_GroupByQuery = { __typename?: 'Query', api_productFulfillment_groupBy?: { __typename?: 'Api_ProductFulfillment_groupByOutput', breakdown?: Array<{ __typename?: 'Api_ProductFulfillment_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_ProductFulfillment_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Api_ServicePurchase_ListQueryVariables = Exact<{
  input: Api_ServicePurchase_ListInput;
}>;


export type Api_ServicePurchase_ListQuery = { __typename?: 'Query', api_servicePurchase_list?: { __typename?: 'Api_ServicePurchase_listOutput', data?: Array<{ __typename?: 'Api_ServicePurchase_listOutputData', id?: string | null, product?: string | null, type?: string | null, total?: number | null, balanceDue?: number | null, cancelled?: boolean | null, cancelledAt?: string | null, note?: string | null, createdAt?: string | null } | null> | null, page?: { __typename?: 'Api_ServicePurchase_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_ServicePurchase_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type ServicePurchase_GetQueryVariables = Exact<{
  input: Api_ServicePurchase_GetInput;
}>;


export type ServicePurchase_GetQuery = { __typename?: 'Query', api_servicePurchase_get?: { __typename?: 'Api_ServicePurchase_getOutput', data?: { __typename?: 'Api_ServicePurchase_getOutputData', id?: string | null, product?: string | null, type?: string | null, total?: number | null, balanceDue?: number | null, cancelled?: boolean | null, cancelledAt?: string | null, note?: string | null, createdAt?: string | null } | null } | null };

export type ServicePurchase_CreateMutationVariables = Exact<{
  input: Api_ServicePurchase_CreateInput;
}>;


export type ServicePurchase_CreateMutation = { __typename?: 'Mutation', api_servicePurchase_create?: { __typename?: 'Api_ServicePurchase_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type ServicePurchase_UpdateMutationVariables = Exact<{
  input: Api_ServicePurchase_UpdateInput;
}>;


export type ServicePurchase_UpdateMutation = { __typename?: 'Mutation', api_servicePurchase_update?: { __typename?: 'Api_ServicePurchase_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type ServicePurchase_DeleteMutationVariables = Exact<{
  input: Api_ServicePurchase_DeleteInput;
}>;


export type ServicePurchase_DeleteMutation = { __typename?: 'Mutation', api_servicePurchase_delete?: { __typename?: 'Api_ServicePurchase_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type ServicePurchase_AggregateQueryVariables = Exact<{
  input: Api_ServicePurchase_AggregateInput;
}>;


export type ServicePurchase_AggregateQuery = { __typename?: 'Query', api_servicePurchase_aggregate?: { __typename?: 'Api_ServicePurchase_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_ServicePurchase_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type ServicePurchase_GroupByQueryVariables = Exact<{
  input: Api_ServicePurchase_GroupByInput;
}>;


export type ServicePurchase_GroupByQuery = { __typename?: 'Query', api_servicePurchase_groupBy?: { __typename?: 'Api_ServicePurchase_groupByOutput', breakdown?: Array<{ __typename?: 'Api_ServicePurchase_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_ServicePurchase_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Society_ListQueryVariables = Exact<{
  input: Api_Society_ListInput;
}>;


export type Society_ListQuery = { __typename?: 'Query', api_society_list?: { __typename?: 'Api_Society_listOutput', data?: Array<{ __typename?: 'Api_Society_listOutputData', id?: string | null, name?: string | null, description?: string | null, address?: string | null, createdAt?: string | null, updatedAt?: string | null } | null> | null, page?: { __typename?: 'Api_Society_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Society_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Society_GetQueryVariables = Exact<{
  input: Api_Society_GetInput;
}>;


export type Society_GetQuery = { __typename?: 'Query', api_society_get?: { __typename?: 'Api_Society_getOutput', data?: { __typename?: 'Api_Society_getOutputData', id?: string | null, name?: string | null, description?: string | null, address?: string | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type Society_CreateMutationVariables = Exact<{
  input: Api_Society_CreateInput;
}>;


export type Society_CreateMutation = { __typename?: 'Mutation', api_society_create?: { __typename?: 'Api_Society_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Society_UpdateMutationVariables = Exact<{
  input: Api_Society_UpdateInput;
}>;


export type Society_UpdateMutation = { __typename?: 'Mutation', api_society_update?: { __typename?: 'Api_Society_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Society_DeleteMutationVariables = Exact<{
  input: Api_Society_DeleteInput;
}>;


export type Society_DeleteMutation = { __typename?: 'Mutation', api_society_delete?: { __typename?: 'Api_Society_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Ping_TimeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Ping_TimeSubscription = { __typename?: 'Subscription', ping_time?: { __typename?: 'Time', iso?: string | null, data?: string | null } | null };

export type Api_Wpportaluser_ListQueryVariables = Exact<{
  input: Api_Wpportaluser_ListInput;
}>;


export type Api_Wpportaluser_ListQuery = { __typename?: 'Query', api_wpportaluser_list?: { __typename?: 'Api_Wpportaluser_listOutput', data?: Array<{ __typename?: 'Api_Wpportaluser_listOutputData', user_id?: number | null, first_name?: string | null, last_name?: string | null, email?: string | null, registered_date?: string | null, avatar_url?: string | null, roles?: Array<string | null> | null, courses_count?: number | null, profile_fields?: Array<{ __typename?: 'Api_Wpportaluser_listOutputDataProfile_fields', value?: string | null, group?: string | null, field_id?: string | null, field_type?: string | null } | null> | null, courses?: Array<{ __typename?: 'Api_Wpportaluser_listOutputDataCourses', course_id?: number | null, title?: string | null, enrollment_date?: string | null, completion_date?: string | null, progress_percentage?: number | null, completed_steps?: number | null, total_steps?: number | null, status?: string | null } | null> | null } | null> | null, page?: { __typename?: 'Api_Wpportaluser_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Wpportaluser_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Api_Wpportaluser_GetQueryVariables = Exact<{
  input: Api_Wpportaluser_GetInput;
}>;


export type Api_Wpportaluser_GetQuery = { __typename?: 'Query', api_wpportaluser_get?: { __typename?: 'Api_Wpportaluser_getOutput', data?: { __typename?: 'Api_Wpportaluser_getOutputData', user_id?: number | null, first_name?: string | null, last_name?: string | null, email?: string | null, registered_date?: string | null, avatar_url?: string | null, roles?: Array<string | null> | null, courses_count?: number | null, profile_fields?: Array<{ __typename?: 'Api_Wpportaluser_getOutputDataProfile_fields', value?: string | null, group?: string | null, field_id?: string | null, field_type?: string | null } | null> | null, courses?: Array<{ __typename?: 'Api_Wpportaluser_getOutputDataCourses', course_id?: number | null, title?: string | null, enrollment_date?: string | null, completion_date?: string | null, progress_percentage?: number | null, completed_steps?: number | null, total_steps?: number | null, status?: string | null } | null> | null } | null } | null };


export const Api_Sync_Crm_WordpressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Api_sync_crm_wordpress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_sync_crm_wordpressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_sync_crm_wordpress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<Api_Sync_Crm_WordpressMutation, Api_Sync_Crm_WordpressMutationVariables>;
export const Api_Sync_Crm_NetforumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Api_sync_crm_netforum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_sync_crm_netforumInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_sync_crm_netforum"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<Api_Sync_Crm_NetforumMutation, Api_Sync_Crm_NetforumMutationVariables>;
export const Api_Sync_From_NetforumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Api_sync_from_netforum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_sync_from_netforumInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_sync_from_netforum"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<Api_Sync_From_NetforumMutation, Api_Sync_From_NetforumMutationVariables>;
export const Api_Sync_From_WordpressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Api_sync_from_wordpress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_sync_from_wordpressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_sync_from_wordpress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<Api_Sync_From_WordpressMutation, Api_Sync_From_WordpressMutationVariables>;
export const Api_TimecheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_timecheck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_timecheckInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_timecheck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}}]}}]}}]} as unknown as DocumentNode<Api_TimecheckQuery, Api_TimecheckQueryVariables>;
export const Authclient_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<Authclient_LoginMutation, Authclient_LoginMutationVariables>;
export const Authclient_RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}]}]}}]} as unknown as DocumentNode<Authclient_RegisterMutation, Authclient_RegisterMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const Authclient_ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_changePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<Authclient_ChangePasswordMutation, Authclient_ChangePasswordMutationVariables>;
export const Authclient_RequestPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_requestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<Authclient_RequestPasswordResetMutation, Authclient_RequestPasswordResetMutationVariables>;
export const Authclient_ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<Authclient_ResetPasswordMutation, Authclient_ResetPasswordMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const Education_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"schoolName"}},{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfAchievement"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Education_ListQuery, Education_ListQueryVariables>;
export const Education_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Education_AggregateQuery, Education_AggregateQueryVariables>;
export const Education_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Education_GroupByQuery, Education_GroupByQueryVariables>;
export const Education_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"schoolName"}},{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfAchievement"}}]}}]}}]}}]} as unknown as DocumentNode<Education_GetQuery, Education_GetQueryVariables>;
export const Education_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Education_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Education_CreateMutation, Education_CreateMutationVariables>;
export const Education_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Education_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Education_UpdateMutation, Education_UpdateMutationVariables>;
export const Education_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Education_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Education_DeleteMutation, Education_DeleteMutationVariables>;
export const Events_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_event_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_event_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isCancelled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Events_ListQuery, Events_ListQueryVariables>;
export const Events_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_event_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_event_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isCancelled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Events_GetQuery, Events_GetQueryVariables>;
export const Events_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Events_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_event_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_event_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Events_CreateMutation, Events_CreateMutationVariables>;
export const Events_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Events_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_event_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_event_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Events_UpdateMutation, Events_UpdateMutationVariables>;
export const Events_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Events_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_event_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_event_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Events_DeleteMutation, Events_DeleteMutationVariables>;
export const Files_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Files_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Files_ListQuery, Files_ListQueryVariables>;
export const Files_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Files_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]} as unknown as DocumentNode<Files_GetQuery, Files_GetQueryVariables>;
export const Files_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Files_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Files_CreateMutation, Files_CreateMutationVariables>;
export const Files_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Files_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Files_UpdateMutation, Files_UpdateMutationVariables>;
export const Files_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Files_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Files_DeleteMutation, Files_DeleteMutationVariables>;
export const File_UploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"File_upload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File_uploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_upload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]} as unknown as DocumentNode<File_UploadMutation, File_UploadMutationVariables>;
export const File_UploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"File_uploadURL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File_uploadURLInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_uploadURL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadURL"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"viewURL"}}]}}]}}]}}]} as unknown as DocumentNode<File_UploadUrlMutation, File_UploadUrlMutationVariables>;
export const Invoice_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Invoice_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoice_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoice_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paymentLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Invoice_ListQuery, Invoice_ListQueryVariables>;
export const Invoice_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Invoice_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoice_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoice_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paymentLink"}}]}}]}}]}}]} as unknown as DocumentNode<Invoice_GetQuery, Invoice_GetQueryVariables>;
export const Invoice_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Invoice_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoice_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoice_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Invoice_CreateMutation, Invoice_CreateMutationVariables>;
export const Invoice_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Invoice_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoice_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoice_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Invoice_UpdateMutation, Invoice_UpdateMutationVariables>;
export const Invoice_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Invoice_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoice_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoice_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Invoice_DeleteMutation, Invoice_DeleteMutationVariables>;
export const InvoiceBatch_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvoiceBatch_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoiceBatch_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoiceBatch_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"}},{"kind":"Field","name":{"kind":"Name","value":"batchID"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<InvoiceBatch_ListQuery, InvoiceBatch_ListQueryVariables>;
export const Api_InvoiceBatch_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_invoiceBatch_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoiceBatch_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoiceBatch_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"}},{"kind":"Field","name":{"kind":"Name","value":"batchID"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<Api_InvoiceBatch_GetQuery, Api_InvoiceBatch_GetQueryVariables>;
export const InvoiceBatch_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InvoiceBatch_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoiceBatch_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoiceBatch_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<InvoiceBatch_CreateMutation, InvoiceBatch_CreateMutationVariables>;
export const InvoiceBatch_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InvoiceBatch_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoiceBatch_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoiceBatch_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<InvoiceBatch_UpdateMutation, InvoiceBatch_UpdateMutationVariables>;
export const InvoiceBatch_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InvoiceBatch_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_invoiceBatch_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_invoiceBatch_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<InvoiceBatch_DeleteMutation, InvoiceBatch_DeleteMutationVariables>;
export const Members_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"society"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"home_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"business_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"cell_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"home_city"}},{"kind":"Field","name":{"kind":"Name","value":"home_state"}},{"kind":"Field","name":{"kind":"Name","value":"home_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"home_country"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"business_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"business_country"}},{"kind":"Field","name":{"kind":"Name","value":"dental_degree"}},{"kind":"Field","name":{"kind":"Name","value":"dental_school"}},{"kind":"Field","name":{"kind":"Name","value":"dental_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_degree"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_school"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_degree"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_school"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"rejoinDate"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"memberType"}},{"kind":"Field","name":{"kind":"Name","value":"memberPackage"}},{"kind":"Field","name":{"kind":"Name","value":"isBlacklisted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Members_ListQuery, Members_ListQueryVariables>;
export const Members_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Members_AggregateQuery, Members_AggregateQueryVariables>;
export const Members_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Members_GroupByQuery, Members_GroupByQueryVariables>;
export const Members_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"society"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"home_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"business_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"cell_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"home_city"}},{"kind":"Field","name":{"kind":"Name","value":"home_state"}},{"kind":"Field","name":{"kind":"Name","value":"home_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"home_country"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"business_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"business_country"}},{"kind":"Field","name":{"kind":"Name","value":"dental_degree"}},{"kind":"Field","name":{"kind":"Name","value":"dental_school"}},{"kind":"Field","name":{"kind":"Name","value":"dental_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_degree"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_school"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_degree"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_school"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"rejoinDate"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"memberType"}},{"kind":"Field","name":{"kind":"Name","value":"memberPackage"}},{"kind":"Field","name":{"kind":"Name","value":"isBlacklisted"}}]}}]}}]}}]} as unknown as DocumentNode<Members_GetQuery, Members_GetQueryVariables>;
export const Members_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_CreateMutation, Members_CreateMutationVariables>;
export const Members_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_UpdateMutation, Members_UpdateMutationVariables>;
export const Members_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_DeleteMutation, Members_DeleteMutationVariables>;
export const Application_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Application_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_application_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_application_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"memberType"}},{"kind":"Field","name":{"kind":"Name","value":"society"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Application_ListQuery, Application_ListQueryVariables>;
export const Application_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Application_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_application_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_application_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"memberType"}},{"kind":"Field","name":{"kind":"Name","value":"society"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Application_GetQuery, Application_GetQueryVariables>;
export const Application_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Application_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_application_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_application_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Application_CreateMutation, Application_CreateMutationVariables>;
export const Application_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Application_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_application_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_application_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Application_UpdateMutation, Application_UpdateMutationVariables>;
export const Application_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Application_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_application_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_application_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Application_DeleteMutation, Application_DeleteMutationVariables>;
export const Notes_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notes_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_note_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_note_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Notes_ListQuery, Notes_ListQueryVariables>;
export const Notes_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notes_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_note_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_note_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<Notes_GetQuery, Notes_GetQueryVariables>;
export const Notes_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Notes_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_note_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_note_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ids"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<Notes_CreateMutation, Notes_CreateMutationVariables>;
export const Notes_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Notes_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_note_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_note_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Notes_UpdateMutation, Notes_UpdateMutationVariables>;
export const Notes_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Notes_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_note_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_note_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Notes_DeleteMutation, Notes_DeleteMutationVariables>;
export const ProductFulfillment_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductFulfillment_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"package"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"shipped"}},{"kind":"Field","name":{"kind":"Name","value":"returnedCancelled"}},{"kind":"Field","name":{"kind":"Name","value":"returnedCancelledAt"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<ProductFulfillment_ListQuery, ProductFulfillment_ListQueryVariables>;
export const Api_ProductFulfillment_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_productFulfillment_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"package"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"shipped"}},{"kind":"Field","name":{"kind":"Name","value":"returnedCancelled"}},{"kind":"Field","name":{"kind":"Name","value":"returnedCancelledAt"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]} as unknown as DocumentNode<Api_ProductFulfillment_GetQuery, Api_ProductFulfillment_GetQueryVariables>;
export const ProductFulfillment_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductFulfillment_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<ProductFulfillment_CreateMutation, ProductFulfillment_CreateMutationVariables>;
export const ProductFulfillment_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductFulfillment_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ids"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<ProductFulfillment_UpdateMutation, ProductFulfillment_UpdateMutationVariables>;
export const ProductFulfillment_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductFulfillment_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ids"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<ProductFulfillment_DeleteMutation, ProductFulfillment_DeleteMutationVariables>;
export const Api_ProductFulfillment_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_productFulfillment_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Api_ProductFulfillment_AggregateQuery, Api_ProductFulfillment_AggregateQueryVariables>;
export const ProductFulfillment_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductFulfillment_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_productFulfillment_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_productFulfillment_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductFulfillment_GroupByQuery, ProductFulfillment_GroupByQueryVariables>;
export const Api_ServicePurchase_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_servicePurchase_list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"balanceDue"}},{"kind":"Field","name":{"kind":"Name","value":"cancelled"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledAt"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Api_ServicePurchase_ListQuery, Api_ServicePurchase_ListQueryVariables>;
export const ServicePurchase_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServicePurchase_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"balanceDue"}},{"kind":"Field","name":{"kind":"Name","value":"cancelled"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledAt"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<ServicePurchase_GetQuery, ServicePurchase_GetQueryVariables>;
export const ServicePurchase_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServicePurchase_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<ServicePurchase_CreateMutation, ServicePurchase_CreateMutationVariables>;
export const ServicePurchase_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServicePurchase_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<ServicePurchase_UpdateMutation, ServicePurchase_UpdateMutationVariables>;
export const ServicePurchase_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServicePurchase_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<ServicePurchase_DeleteMutation, ServicePurchase_DeleteMutationVariables>;
export const ServicePurchase_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServicePurchase_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ServicePurchase_AggregateQuery, ServicePurchase_AggregateQueryVariables>;
export const ServicePurchase_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServicePurchase_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_servicePurchase_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_servicePurchase_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ServicePurchase_GroupByQuery, ServicePurchase_GroupByQueryVariables>;
export const Society_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Society_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_society_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_society_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Society_ListQuery, Society_ListQueryVariables>;
export const Society_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Society_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_society_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_society_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Society_GetQuery, Society_GetQueryVariables>;
export const Society_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Society_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_society_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_society_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Society_CreateMutation, Society_CreateMutationVariables>;
export const Society_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Society_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_society_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_society_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Society_UpdateMutation, Society_UpdateMutationVariables>;
export const Society_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Society_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_society_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_society_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Society_DeleteMutation, Society_DeleteMutationVariables>;
export const Ping_TimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Ping_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ping_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<Ping_TimeSubscription, Ping_TimeSubscriptionVariables>;
export const Api_Wpportaluser_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_wpportaluser_list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_wpportaluser_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_wpportaluser_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"registered_date"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"profile_fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"field_id"}},{"kind":"Field","name":{"kind":"Name","value":"field_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses_count"}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"enrollment_date"}},{"kind":"Field","name":{"kind":"Name","value":"completion_date"}},{"kind":"Field","name":{"kind":"Name","value":"progress_percentage"}},{"kind":"Field","name":{"kind":"Name","value":"completed_steps"}},{"kind":"Field","name":{"kind":"Name","value":"total_steps"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Api_Wpportaluser_ListQuery, Api_Wpportaluser_ListQueryVariables>;
export const Api_Wpportaluser_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Api_wpportaluser_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_wpportaluser_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_wpportaluser_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"registered_date"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"profile_fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"field_id"}},{"kind":"Field","name":{"kind":"Name","value":"field_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses_count"}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"enrollment_date"}},{"kind":"Field","name":{"kind":"Name","value":"completion_date"}},{"kind":"Field","name":{"kind":"Name","value":"progress_percentage"}},{"kind":"Field","name":{"kind":"Name","value":"completed_steps"}},{"kind":"Field","name":{"kind":"Name","value":"total_steps"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Api_Wpportaluser_GetQuery, Api_Wpportaluser_GetQueryVariables>;