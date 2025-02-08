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

export type Api_Education_AggregateOutput = {
  __typename?: 'Api_Education_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Education_AggregateOutputBreakdown>>>;
};

export type Api_Education_AggregateOutputBreakdown = {
  __typename?: 'Api_Education_aggregateOutputBreakdown';
  counts: Array<Maybe<Api_Education_AggregateOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Education_AggregateOutputBreakdownCounts = {
  __typename?: 'Api_Education_aggregateOutputBreakdownCounts';
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

export type Api_Member_AggregateOutput = {
  __typename?: 'Api_Member_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Member_AggregateOutputBreakdown>>>;
};

export type Api_Member_AggregateOutputBreakdown = {
  __typename?: 'Api_Member_aggregateOutputBreakdown';
  counts: Array<Maybe<Api_Member_AggregateOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_AggregateOutputBreakdownCounts = {
  __typename?: 'Api_Member_aggregateOutputBreakdownCounts';
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
  rejoinDate?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_ListOutput = {
  __typename?: 'Api_Member_listOutput';
  data?: Maybe<Array<Maybe<Api_Member_ListOutputData>>>;
  page?: Maybe<Api_Member_ListOutputPage>;
};

export type Api_Member_ListOutputData = {
  __typename?: 'Api_Member_listOutputData';
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
  rejoinDate?: Maybe<Scalars['String']['output']>;
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

export type Api_Sync_UsersOutput = {
  __typename?: 'Api_Sync_usersOutput';
  count?: Maybe<Scalars['Float']['output']>;
};

export type Api_Education_AggregateInput = {
  data: Api_Education_AggregateInputData;
};

export type Api_Education_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
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
  dateOfAchievement?: InputMaybe<Scalars['String']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Member_AggregateInput = {
  data: Api_Member_AggregateInputData;
};

export type Api_Member_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
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
  email: Scalars['String']['input'];
  home_addressLine1?: InputMaybe<Scalars['String']['input']>;
  home_addressLine2?: InputMaybe<Scalars['String']['input']>;
  home_city?: InputMaybe<Scalars['String']['input']>;
  home_country?: InputMaybe<Scalars['String']['input']>;
  home_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  home_postalCode?: InputMaybe<Scalars['String']['input']>;
  home_state?: InputMaybe<Scalars['String']['input']>;
  isBlacklisted?: InputMaybe<Scalars['Boolean']['input']>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  home_addressLine1?: InputMaybe<Scalars['String']['input']>;
  home_addressLine2?: InputMaybe<Scalars['String']['input']>;
  home_city?: InputMaybe<Scalars['String']['input']>;
  home_country?: InputMaybe<Scalars['String']['input']>;
  home_phoneNumber?: InputMaybe<Scalars['String']['input']>;
  home_postalCode?: InputMaybe<Scalars['String']['input']>;
  home_state?: InputMaybe<Scalars['String']['input']>;
  isBlacklisted?: InputMaybe<Scalars['Boolean']['input']>;
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
};

export type Api_Sync_UsersInput = {
  data: Api_Sync_UsersInputData;
};

export type Api_Sync_UsersInputData = {
  page?: InputMaybe<Api_Sync_UsersInputDataPage>;
};

export type Api_Sync_UsersInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Sync_UsersInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Sync_UsersInputDataPageSort>;
};

export type Api_Sync_UsersInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Sync_UsersInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
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

export type FileUploadOutput = {
  __typename?: 'FileUploadOutput';
  files: Array<Maybe<FileUploadOutputFiles>>;
};

export type FileUploadOutputFiles = {
  __typename?: 'FileUploadOutputFiles';
  filename: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type File_UploadInput = {
  files: Array<InputMaybe<File_UploadInputFiles>>;
};

export type File_UploadInputFiles = {
  b64: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
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

export type Invoice = {
  __typename?: 'Invoice';
  accountant?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoiceDate?: Maybe<Scalars['DateTime']['output']>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  lineItems?: Maybe<Array<InvoiceLineItem>>;
  lineItemsCount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  receiver?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
};


export type InvoiceLineItemsArgs = {
  cursor?: InputMaybe<InvoiceLineItemWhereUniqueInput>;
  orderBy?: Array<InvoiceLineItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvoiceLineItemWhereInput;
};


export type InvoiceLineItemsCountArgs = {
  where?: InvoiceLineItemWhereInput;
};

export type InvoiceCreateInput = {
  accountant?: InputMaybe<Scalars['String']['input']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']['input']>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<InvoiceLineItemRelateToManyForCreateInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type InvoiceLineItem = {
  __typename?: 'InvoiceLineItem';
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productID?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type InvoiceLineItemCreateInput = {
  invoice?: InputMaybe<InvoiceRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productID?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type InvoiceLineItemManyRelationFilter = {
  every?: InputMaybe<InvoiceLineItemWhereInput>;
  none?: InputMaybe<InvoiceLineItemWhereInput>;
  some?: InputMaybe<InvoiceLineItemWhereInput>;
};

export type InvoiceLineItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  productID?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
};

export type InvoiceLineItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<InvoiceLineItemWhereUniqueInput>>;
  create?: InputMaybe<Array<InvoiceLineItemCreateInput>>;
};

export type InvoiceLineItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<InvoiceLineItemWhereUniqueInput>>;
  create?: InputMaybe<Array<InvoiceLineItemCreateInput>>;
  disconnect?: InputMaybe<Array<InvoiceLineItemWhereUniqueInput>>;
  set?: InputMaybe<Array<InvoiceLineItemWhereUniqueInput>>;
};

export type InvoiceLineItemUpdateArgs = {
  data: InvoiceLineItemUpdateInput;
  where: InvoiceLineItemWhereUniqueInput;
};

export type InvoiceLineItemUpdateInput = {
  invoice?: InputMaybe<InvoiceRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productID?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type InvoiceLineItemWhereInput = {
  AND?: InputMaybe<Array<InvoiceLineItemWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceLineItemWhereInput>>;
  OR?: InputMaybe<Array<InvoiceLineItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  invoice?: InputMaybe<InvoiceWhereInput>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  productID?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<FloatNullableFilter>;
};

export type InvoiceLineItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type InvoiceOrderByInput = {
  accountant?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  invoiceDate?: InputMaybe<OrderDirection>;
  invoiceNumber?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  receiver?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  tags?: InputMaybe<OrderDirection>;
  totalAmount?: InputMaybe<OrderDirection>;
};

export type InvoiceRelateToOneForCreateInput = {
  connect?: InputMaybe<InvoiceWhereUniqueInput>;
  create?: InputMaybe<InvoiceCreateInput>;
};

export type InvoiceRelateToOneForUpdateInput = {
  connect?: InputMaybe<InvoiceWhereUniqueInput>;
  create?: InputMaybe<InvoiceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvoiceUpdateArgs = {
  data: InvoiceUpdateInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpdateInput = {
  accountant?: InputMaybe<Scalars['String']['input']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']['input']>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<InvoiceLineItemRelateToManyForUpdateInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type InvoiceWhereInput = {
  AND?: InputMaybe<Array<InvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceWhereInput>>;
  OR?: InputMaybe<Array<InvoiceWhereInput>>;
  accountant?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invoiceDate?: InputMaybe<DateTimeNullableFilter>;
  invoiceNumber?: InputMaybe<StringFilter>;
  lineItems?: InputMaybe<InvoiceLineItemManyRelationFilter>;
  location?: InputMaybe<StringFilter>;
  receiver?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringFilter>;
  totalAmount?: InputMaybe<FloatNullableFilter>;
};

export type InvoiceWhereUniqueInput = {
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
  api_education_create?: Maybe<Api_Education_CreateOutput>;
  api_education_delete?: Maybe<Api_Education_DeleteOutput>;
  api_education_update?: Maybe<Api_Education_UpdateOutput>;
  api_member_create?: Maybe<Api_Member_CreateOutput>;
  api_member_delete?: Maybe<Api_Member_DeleteOutput>;
  api_member_update?: Maybe<Api_Member_UpdateOutput>;
  api_sync_users?: Maybe<Api_Sync_UsersOutput>;
  authclient_changePassword?: Maybe<Scalars['Boolean']['output']>;
  authclient_login?: Maybe<ClientItemAuthenticationWithPasswordResult>;
  authclient_register?: Maybe<Scalars['Boolean']['output']>;
  authclient_requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  authclient_resetPassword?: Maybe<Scalars['Boolean']['output']>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createGroup?: Maybe<Group>;
  createGroupMember?: Maybe<GroupMember>;
  createGroupMemberFlag?: Maybe<GroupMemberFlag>;
  createGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  createGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  createGroups?: Maybe<Array<Maybe<Group>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInvoice?: Maybe<Invoice>;
  createInvoiceLineItem?: Maybe<InvoiceLineItem>;
  createInvoiceLineItems?: Maybe<Array<Maybe<InvoiceLineItem>>>;
  createInvoices?: Maybe<Array<Maybe<Invoice>>>;
  createMailSendLog?: Maybe<MailSendLog>;
  createMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  createMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  createMailTrackHistory?: Maybe<MailTrackHistory>;
  createServerError?: Maybe<ServerError>;
  createServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  createServerLog?: Maybe<ServerLog>;
  createServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  createUser?: Maybe<User>;
  createUserEducationRecord?: Maybe<UserEducationRecord>;
  createUserEducationRecords?: Maybe<Array<Maybe<UserEducationRecord>>>;
  createUserFlag?: Maybe<UserFlag>;
  createUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  createUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  createUserLoginHistory?: Maybe<UserLoginHistory>;
  createUserSystemFlag?: Maybe<UserSystemFlag>;
  createUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteGroup?: Maybe<Group>;
  deleteGroupMember?: Maybe<GroupMember>;
  deleteGroupMemberFlag?: Maybe<GroupMemberFlag>;
  deleteGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  deleteGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  deleteGroups?: Maybe<Array<Maybe<Group>>>;
  deleteInvoice?: Maybe<Invoice>;
  deleteInvoiceLineItem?: Maybe<InvoiceLineItem>;
  deleteInvoiceLineItems?: Maybe<Array<Maybe<InvoiceLineItem>>>;
  deleteInvoices?: Maybe<Array<Maybe<Invoice>>>;
  deleteMailSendLog?: Maybe<MailSendLog>;
  deleteMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  deleteMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  deleteMailTrackHistory?: Maybe<MailTrackHistory>;
  deleteServerError?: Maybe<ServerError>;
  deleteServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  deleteServerLog?: Maybe<ServerLog>;
  deleteServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  deleteUser?: Maybe<User>;
  deleteUserEducationRecord?: Maybe<UserEducationRecord>;
  deleteUserEducationRecords?: Maybe<Array<Maybe<UserEducationRecord>>>;
  deleteUserFlag?: Maybe<UserFlag>;
  deleteUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  deleteUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  deleteUserLoginHistory?: Maybe<UserLoginHistory>;
  deleteUserSystemFlag?: Maybe<UserSystemFlag>;
  deleteUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  file_upload?: Maybe<FileUploadOutput>;
  updateGroup?: Maybe<Group>;
  updateGroupMember?: Maybe<GroupMember>;
  updateGroupMemberFlag?: Maybe<GroupMemberFlag>;
  updateGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  updateGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  updateGroups?: Maybe<Array<Maybe<Group>>>;
  updateInvoice?: Maybe<Invoice>;
  updateInvoiceLineItem?: Maybe<InvoiceLineItem>;
  updateInvoiceLineItems?: Maybe<Array<Maybe<InvoiceLineItem>>>;
  updateInvoices?: Maybe<Array<Maybe<Invoice>>>;
  updateMailSendLog?: Maybe<MailSendLog>;
  updateMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  updateMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  updateMailTrackHistory?: Maybe<MailTrackHistory>;
  updateServerError?: Maybe<ServerError>;
  updateServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  updateServerLog?: Maybe<ServerLog>;
  updateServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  updateUser?: Maybe<User>;
  updateUserEducationRecord?: Maybe<UserEducationRecord>;
  updateUserEducationRecords?: Maybe<Array<Maybe<UserEducationRecord>>>;
  updateUserFlag?: Maybe<UserFlag>;
  updateUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  updateUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  updateUserLoginHistory?: Maybe<UserLoginHistory>;
  updateUserSystemFlag?: Maybe<UserSystemFlag>;
  updateUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  user_setFlag?: Maybe<Array<Maybe<UserFlag>>>;
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


export type MutationApi_Member_CreateArgs = {
  input: Api_Member_CreateInput;
};


export type MutationApi_Member_DeleteArgs = {
  input: Api_Member_DeleteInput;
};


export type MutationApi_Member_UpdateArgs = {
  input: Api_Member_UpdateInput;
};


export type MutationApi_Sync_UsersArgs = {
  input: Api_Sync_UsersInput;
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


export type MutationCreateInvoiceArgs = {
  data: InvoiceCreateInput;
};


export type MutationCreateInvoiceLineItemArgs = {
  data: InvoiceLineItemCreateInput;
};


export type MutationCreateInvoiceLineItemsArgs = {
  data: Array<InvoiceLineItemCreateInput>;
};


export type MutationCreateInvoicesArgs = {
  data: Array<InvoiceCreateInput>;
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


export type MutationCreateUserSystemFlagArgs = {
  data: UserSystemFlagCreateInput;
};


export type MutationCreateUserSystemFlagsArgs = {
  data: Array<UserSystemFlagCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
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


export type MutationDeleteInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};


export type MutationDeleteInvoiceLineItemArgs = {
  where: InvoiceLineItemWhereUniqueInput;
};


export type MutationDeleteInvoiceLineItemsArgs = {
  where: Array<InvoiceLineItemWhereUniqueInput>;
};


export type MutationDeleteInvoicesArgs = {
  where: Array<InvoiceWhereUniqueInput>;
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


export type MutationDeleteUserSystemFlagArgs = {
  where: UserSystemFlagWhereUniqueInput;
};


export type MutationDeleteUserSystemFlagsArgs = {
  where: Array<UserSystemFlagWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationFile_UploadArgs = {
  input: File_UploadInput;
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


export type MutationUpdateInvoiceArgs = {
  data: InvoiceUpdateInput;
  where: InvoiceWhereUniqueInput;
};


export type MutationUpdateInvoiceLineItemArgs = {
  data: InvoiceLineItemUpdateInput;
  where: InvoiceLineItemWhereUniqueInput;
};


export type MutationUpdateInvoiceLineItemsArgs = {
  data: Array<InvoiceLineItemUpdateArgs>;
};


export type MutationUpdateInvoicesArgs = {
  data: Array<InvoiceUpdateArgs>;
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

export type Query = {
  __typename?: 'Query';
  ErrorTest?: Maybe<Scalars['String']['output']>;
  api_education_aggregate?: Maybe<Api_Education_AggregateOutput>;
  api_education_get?: Maybe<Api_Education_GetOutput>;
  api_education_list?: Maybe<Api_Education_ListOutput>;
  api_member_aggregate?: Maybe<Api_Member_AggregateOutput>;
  api_member_get?: Maybe<Api_Member_GetOutput>;
  api_member_list?: Maybe<Api_Member_ListOutput>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
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
  invoice?: Maybe<Invoice>;
  invoiceLineItem?: Maybe<InvoiceLineItem>;
  invoiceLineItems?: Maybe<Array<InvoiceLineItem>>;
  invoiceLineItemsCount?: Maybe<Scalars['Int']['output']>;
  invoices?: Maybe<Array<Invoice>>;
  invoicesCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  mailSendLog?: Maybe<MailSendLog>;
  mailSendLogs?: Maybe<Array<MailSendLog>>;
  mailSendLogsCount?: Maybe<Scalars['Int']['output']>;
  mailTrackHistories?: Maybe<Array<MailTrackHistory>>;
  mailTrackHistoriesCount?: Maybe<Scalars['Int']['output']>;
  mailTrackHistory?: Maybe<MailTrackHistory>;
  serverError?: Maybe<ServerError>;
  serverErrors?: Maybe<Array<ServerError>>;
  serverErrorsCount?: Maybe<Scalars['Int']['output']>;
  serverLog?: Maybe<ServerLog>;
  serverLogs?: Maybe<Array<ServerLog>>;
  serverLogsCount?: Maybe<Scalars['Int']['output']>;
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
  userSystemFlag?: Maybe<UserSystemFlag>;
  userSystemFlags?: Maybe<Array<UserSystemFlag>>;
  userSystemFlagsCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryApi_Education_AggregateArgs = {
  input: Api_Education_AggregateInput;
};


export type QueryApi_Education_GetArgs = {
  input: Api_Education_GetInput;
};


export type QueryApi_Education_ListArgs = {
  input: Api_Education_ListInput;
};


export type QueryApi_Member_AggregateArgs = {
  input: Api_Member_AggregateInput;
};


export type QueryApi_Member_GetArgs = {
  input: Api_Member_GetInput;
};


export type QueryApi_Member_ListArgs = {
  input: Api_Member_ListInput;
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


export type QueryInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};


export type QueryInvoiceLineItemArgs = {
  where: InvoiceLineItemWhereUniqueInput;
};


export type QueryInvoiceLineItemsArgs = {
  cursor?: InputMaybe<InvoiceLineItemWhereUniqueInput>;
  orderBy?: Array<InvoiceLineItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvoiceLineItemWhereInput;
};


export type QueryInvoiceLineItemsCountArgs = {
  where?: InvoiceLineItemWhereInput;
};


export type QueryInvoicesArgs = {
  cursor?: InputMaybe<InvoiceWhereUniqueInput>;
  orderBy?: Array<InvoiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvoiceWhereInput;
};


export type QueryInvoicesCountArgs = {
  where?: InvoiceWhereInput;
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
  ortho_degree?: Maybe<Scalars['String']['output']>;
  ortho_graduationYear?: Maybe<Scalars['String']['output']>;
  ortho_school?: Maybe<Scalars['String']['output']>;
  postgraduate_degree?: Maybe<Scalars['String']['output']>;
  postgraduate_graduationYear?: Maybe<Scalars['String']['output']>;
  postgraduate_school?: Maybe<Scalars['String']['output']>;
  rejoinDate?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UserRoleType>;
  systemFlags?: Maybe<Array<UserSystemFlag>>;
  systemFlagsCount?: Maybe<Scalars['Int']['output']>;
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
  ortho_degree?: InputMaybe<Scalars['String']['input']>;
  ortho_graduationYear?: InputMaybe<Scalars['String']['input']>;
  ortho_school?: InputMaybe<Scalars['String']['input']>;
  postgraduate_degree?: InputMaybe<Scalars['String']['input']>;
  postgraduate_graduationYear?: InputMaybe<Scalars['String']['input']>;
  postgraduate_school?: InputMaybe<Scalars['String']['input']>;
  rejoinDate?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<UserRoleType>;
  systemFlags?: InputMaybe<UserSystemFlagRelateToManyForCreateInput>;
};

export type UserEducationRecord = {
  __typename?: 'UserEducationRecord';
  achievement?: Maybe<Scalars['String']['output']>;
  dateOfAchievement?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  schoolName?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserEducationRecordCreateInput = {
  achievement?: InputMaybe<Scalars['String']['input']>;
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
  dateOfAchievement?: InputMaybe<Scalars['DateTime']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserEducationRecordWhereInput = {
  AND?: InputMaybe<Array<UserEducationRecordWhereInput>>;
  NOT?: InputMaybe<Array<UserEducationRecordWhereInput>>;
  OR?: InputMaybe<Array<UserEducationRecordWhereInput>>;
  achievement?: InputMaybe<StringFilter>;
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

export type UserOrderByInput = {
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
  rejoinDate?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
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
  ortho_degree?: InputMaybe<Scalars['String']['input']>;
  ortho_graduationYear?: InputMaybe<Scalars['String']['input']>;
  ortho_school?: InputMaybe<Scalars['String']['input']>;
  postgraduate_degree?: InputMaybe<Scalars['String']['input']>;
  postgraduate_graduationYear?: InputMaybe<Scalars['String']['input']>;
  postgraduate_school?: InputMaybe<Scalars['String']['input']>;
  rejoinDate?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<UserRoleType>;
  systemFlags?: InputMaybe<UserSystemFlagRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
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
  ortho_degree?: InputMaybe<StringFilter>;
  ortho_graduationYear?: InputMaybe<StringFilter>;
  ortho_school?: InputMaybe<StringFilter>;
  postgraduate_degree?: InputMaybe<StringFilter>;
  postgraduate_graduationYear?: InputMaybe<StringFilter>;
  postgraduate_school?: InputMaybe<StringFilter>;
  rejoinDate?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
  systemFlags?: InputMaybe<UserSystemFlagManyRelationFilter>;
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


export type MeQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, name?: string | null, lastName?: string | null, displayName?: string | null, email?: string | null, role?: UserRoleType | null, createdAt?: any | null, groupsCount?: number | null } | null };

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


export type Education_AggregateQuery = { __typename?: 'Query', api_education_aggregate?: { __typename?: 'Api_Education_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Education_aggregateOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Education_aggregateOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

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

export type Members_ListQueryVariables = Exact<{
  input: Api_Member_ListInput;
}>;


export type Members_ListQuery = { __typename?: 'Query', api_member_list?: { __typename?: 'Api_Member_listOutput', data?: Array<{ __typename?: 'Api_Member_listOutputData', id?: string | null, email?: string | null, createdAt?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, displayName?: string | null, avatar?: string | null, home_phoneNumber?: string | null, business_phoneNumber?: string | null, cell_phoneNumber?: string | null, home_addressLine1?: string | null, home_addressLine2?: string | null, home_city?: string | null, home_state?: string | null, home_postalCode?: string | null, home_country?: string | null, business_addressLine1?: string | null, business_addressLine2?: string | null, business_city?: string | null, business_state?: string | null, business_postalCode?: string | null, business_country?: string | null, dental_degree?: string | null, dental_school?: string | null, dental_graduationYear?: string | null, ortho_degree?: string | null, ortho_school?: string | null, ortho_graduationYear?: string | null, postgraduate_degree?: string | null, postgraduate_school?: string | null, postgraduate_graduationYear?: string | null, joinDate?: string | null, rejoinDate?: string | null, effectiveDate?: string | null, expirationDate?: string | null, memberType?: string | null, memberPackage?: string | null, isBlacklisted?: boolean | null } | null> | null, page?: { __typename?: 'Api_Member_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Member_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Members_AggregateQueryVariables = Exact<{
  input: Api_Member_AggregateInput;
}>;


export type Members_AggregateQuery = { __typename?: 'Query', api_member_aggregate?: { __typename?: 'Api_Member_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Member_aggregateOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Member_aggregateOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Members_GetQueryVariables = Exact<{
  input: Api_Member_GetInput;
}>;


export type Members_GetQuery = { __typename?: 'Query', api_member_get?: { __typename?: 'Api_Member_getOutput', data?: { __typename?: 'Api_Member_getOutputData', id?: string | null, email?: string | null, createdAt?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, displayName?: string | null, avatar?: string | null, home_phoneNumber?: string | null, business_phoneNumber?: string | null, cell_phoneNumber?: string | null, home_addressLine1?: string | null, home_addressLine2?: string | null, home_city?: string | null, home_state?: string | null, home_postalCode?: string | null, home_country?: string | null, business_addressLine1?: string | null, business_addressLine2?: string | null, business_city?: string | null, business_state?: string | null, business_postalCode?: string | null, business_country?: string | null, dental_degree?: string | null, dental_school?: string | null, dental_graduationYear?: string | null, ortho_degree?: string | null, ortho_school?: string | null, ortho_graduationYear?: string | null, postgraduate_degree?: string | null, postgraduate_school?: string | null, postgraduate_graduationYear?: string | null, joinDate?: string | null, rejoinDate?: string | null, effectiveDate?: string | null, expirationDate?: string | null, memberType?: string | null, memberPackage?: string | null, isBlacklisted?: boolean | null } | null } | null };

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

export type Ping_TimeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Ping_TimeSubscription = { __typename?: 'Subscription', ping_time?: { __typename?: 'Time', iso?: string | null, data?: string | null } | null };


export const Authclient_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<Authclient_LoginMutation, Authclient_LoginMutationVariables>;
export const Authclient_RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}]}]}}]} as unknown as DocumentNode<Authclient_RegisterMutation, Authclient_RegisterMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"groupsCount"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const Authclient_ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_changePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<Authclient_ChangePasswordMutation, Authclient_ChangePasswordMutationVariables>;
export const Authclient_RequestPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_requestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<Authclient_RequestPasswordResetMutation, Authclient_RequestPasswordResetMutationVariables>;
export const Authclient_ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<Authclient_ResetPasswordMutation, Authclient_ResetPasswordMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const Education_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"schoolName"}},{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfAchievement"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Education_ListQuery, Education_ListQueryVariables>;
export const Education_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Education_AggregateQuery, Education_AggregateQueryVariables>;
export const Education_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Education_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"schoolName"}},{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfAchievement"}}]}}]}}]}}]} as unknown as DocumentNode<Education_GetQuery, Education_GetQueryVariables>;
export const Education_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Education_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Education_CreateMutation, Education_CreateMutationVariables>;
export const Education_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Education_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Education_UpdateMutation, Education_UpdateMutationVariables>;
export const Education_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Education_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_education_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_education_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Education_DeleteMutation, Education_DeleteMutationVariables>;
export const Members_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"home_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"business_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"cell_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"home_city"}},{"kind":"Field","name":{"kind":"Name","value":"home_state"}},{"kind":"Field","name":{"kind":"Name","value":"home_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"home_country"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"business_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"business_country"}},{"kind":"Field","name":{"kind":"Name","value":"dental_degree"}},{"kind":"Field","name":{"kind":"Name","value":"dental_school"}},{"kind":"Field","name":{"kind":"Name","value":"dental_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_degree"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_school"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_degree"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_school"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"rejoinDate"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"memberType"}},{"kind":"Field","name":{"kind":"Name","value":"memberPackage"}},{"kind":"Field","name":{"kind":"Name","value":"isBlacklisted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Members_ListQuery, Members_ListQueryVariables>;
export const Members_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Members_AggregateQuery, Members_AggregateQueryVariables>;
export const Members_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"home_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"business_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"cell_phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"home_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"home_city"}},{"kind":"Field","name":{"kind":"Name","value":"home_state"}},{"kind":"Field","name":{"kind":"Name","value":"home_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"home_country"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"business_addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"business_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"business_country"}},{"kind":"Field","name":{"kind":"Name","value":"dental_degree"}},{"kind":"Field","name":{"kind":"Name","value":"dental_school"}},{"kind":"Field","name":{"kind":"Name","value":"dental_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_degree"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_school"}},{"kind":"Field","name":{"kind":"Name","value":"ortho_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_degree"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_school"}},{"kind":"Field","name":{"kind":"Name","value":"postgraduate_graduationYear"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"rejoinDate"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"memberType"}},{"kind":"Field","name":{"kind":"Name","value":"memberPackage"}},{"kind":"Field","name":{"kind":"Name","value":"isBlacklisted"}}]}}]}}]}}]} as unknown as DocumentNode<Members_GetQuery, Members_GetQueryVariables>;
export const Members_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_CreateMutation, Members_CreateMutationVariables>;
export const Members_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_UpdateMutation, Members_UpdateMutationVariables>;
export const Members_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_DeleteMutation, Members_DeleteMutationVariables>;
export const Ping_TimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Ping_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ping_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<Ping_TimeSubscription, Ping_TimeSubscriptionVariables>;