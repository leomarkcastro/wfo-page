/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation Authclient_login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n      ... on ClientItemAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": typeof types.Authclient_LoginDocument,
    "\n  mutation Authclient_register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n": typeof types.Authclient_RegisterDocument,
    "\n  query Me {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        middleName\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        lastLogin\n      }\n    }\n  }\n": typeof types.MeDocument,
    "\n  mutation Authclient_changePassword(\n    $oldPassword: String!\n    $newPassword: String!\n  ) {\n    authclient_changePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n": typeof types.Authclient_ChangePasswordDocument,
    "\n  mutation Authclient_requestPasswordReset($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n": typeof types.Authclient_RequestPasswordResetDocument,
    "\n  mutation Authclient_resetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n": typeof types.Authclient_ResetPasswordDocument,
    "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n      name\n      lastName\n      displayName\n      email\n      role\n      lastLogin\n    }\n  }\n": typeof types.UpdateUserDocument,
    "\n  query Education_List($input: Api_education_listInput!) {\n    api_education_list(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n": typeof types.Education_ListDocument,
    "\n  query Education_Aggregate($input: Api_education_aggregateInput!) {\n    api_education_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n": typeof types.Education_AggregateDocument,
    "\n  query Education_Get($input: Api_education_getInput!) {\n    api_education_get(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n    }\n  }\n": typeof types.Education_GetDocument,
    "\n  mutation Education_Create($input: Api_education_createInput!) {\n    api_education_create(input: $input) {\n      count\n      ids\n    }\n  }\n": typeof types.Education_CreateDocument,
    "\n  mutation Education_Update($input: Api_education_updateInput!) {\n    api_education_update(input: $input) {\n      count\n      ids\n    }\n  }\n": typeof types.Education_UpdateDocument,
    "\n  mutation Education_Delete($input: Api_education_deleteInput!) {\n    api_education_delete(input: $input) {\n      count\n      ids\n    }\n  }\n": typeof types.Education_DeleteDocument,
    "\n  query Members_List($input: Api_member_listInput!) {\n    api_member_list(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n": typeof types.Members_ListDocument,
    "\n  query Members_Aggregate($input: Api_member_aggregateInput!) {\n    api_member_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n": typeof types.Members_AggregateDocument,
    "\n  query Members_Get($input: Api_member_getInput!) {\n    api_member_get(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n    }\n  }\n": typeof types.Members_GetDocument,
    "\n  mutation Members_Create($input: Api_member_createInput!) {\n    api_member_create(input: $input) {\n      count\n      ids\n    }\n  }\n": typeof types.Members_CreateDocument,
    "\n  mutation Members_Update($input: Api_member_updateInput!) {\n    api_member_update(input: $input) {\n      count\n      ids\n    }\n  }\n": typeof types.Members_UpdateDocument,
    "\n  mutation Members_Delete($input: Api_member_deleteInput!) {\n    api_member_delete(input: $input) {\n      count\n      ids\n    }\n  }\n": typeof types.Members_DeleteDocument,
    "\n  subscription Ping_time {\n    ping_time {\n      iso\n      data\n    }\n  }\n": typeof types.Ping_TimeDocument,
};
const documents: Documents = {
    "\n  mutation Authclient_login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n      ... on ClientItemAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": types.Authclient_LoginDocument,
    "\n  mutation Authclient_register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n": types.Authclient_RegisterDocument,
    "\n  query Me {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        middleName\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        lastLogin\n      }\n    }\n  }\n": types.MeDocument,
    "\n  mutation Authclient_changePassword(\n    $oldPassword: String!\n    $newPassword: String!\n  ) {\n    authclient_changePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n": types.Authclient_ChangePasswordDocument,
    "\n  mutation Authclient_requestPasswordReset($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n": types.Authclient_RequestPasswordResetDocument,
    "\n  mutation Authclient_resetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n": types.Authclient_ResetPasswordDocument,
    "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n      name\n      lastName\n      displayName\n      email\n      role\n      lastLogin\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query Education_List($input: Api_education_listInput!) {\n    api_education_list(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n": types.Education_ListDocument,
    "\n  query Education_Aggregate($input: Api_education_aggregateInput!) {\n    api_education_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n": types.Education_AggregateDocument,
    "\n  query Education_Get($input: Api_education_getInput!) {\n    api_education_get(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n    }\n  }\n": types.Education_GetDocument,
    "\n  mutation Education_Create($input: Api_education_createInput!) {\n    api_education_create(input: $input) {\n      count\n      ids\n    }\n  }\n": types.Education_CreateDocument,
    "\n  mutation Education_Update($input: Api_education_updateInput!) {\n    api_education_update(input: $input) {\n      count\n      ids\n    }\n  }\n": types.Education_UpdateDocument,
    "\n  mutation Education_Delete($input: Api_education_deleteInput!) {\n    api_education_delete(input: $input) {\n      count\n      ids\n    }\n  }\n": types.Education_DeleteDocument,
    "\n  query Members_List($input: Api_member_listInput!) {\n    api_member_list(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n": types.Members_ListDocument,
    "\n  query Members_Aggregate($input: Api_member_aggregateInput!) {\n    api_member_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n": types.Members_AggregateDocument,
    "\n  query Members_Get($input: Api_member_getInput!) {\n    api_member_get(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n    }\n  }\n": types.Members_GetDocument,
    "\n  mutation Members_Create($input: Api_member_createInput!) {\n    api_member_create(input: $input) {\n      count\n      ids\n    }\n  }\n": types.Members_CreateDocument,
    "\n  mutation Members_Update($input: Api_member_updateInput!) {\n    api_member_update(input: $input) {\n      count\n      ids\n    }\n  }\n": types.Members_UpdateDocument,
    "\n  mutation Members_Delete($input: Api_member_deleteInput!) {\n    api_member_delete(input: $input) {\n      count\n      ids\n    }\n  }\n": types.Members_DeleteDocument,
    "\n  subscription Ping_time {\n    ping_time {\n      iso\n      data\n    }\n  }\n": types.Ping_TimeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Authclient_login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n      ... on ClientItemAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Authclient_login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n      ... on ClientItemAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Authclient_register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n"): (typeof documents)["\n  mutation Authclient_register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        middleName\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        lastLogin\n      }\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        middleName\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        lastLogin\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Authclient_changePassword(\n    $oldPassword: String!\n    $newPassword: String!\n  ) {\n    authclient_changePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n"): (typeof documents)["\n  mutation Authclient_changePassword(\n    $oldPassword: String!\n    $newPassword: String!\n  ) {\n    authclient_changePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Authclient_requestPasswordReset($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n"): (typeof documents)["\n  mutation Authclient_requestPasswordReset($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Authclient_resetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n"): (typeof documents)["\n  mutation Authclient_resetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n      name\n      lastName\n      displayName\n      email\n      role\n      lastLogin\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n      name\n      lastName\n      displayName\n      email\n      role\n      lastLogin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Education_List($input: Api_education_listInput!) {\n    api_education_list(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n"): (typeof documents)["\n  query Education_List($input: Api_education_listInput!) {\n    api_education_list(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Education_Aggregate($input: Api_education_aggregateInput!) {\n    api_education_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Education_Aggregate($input: Api_education_aggregateInput!) {\n    api_education_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Education_Get($input: Api_education_getInput!) {\n    api_education_get(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n    }\n  }\n"): (typeof documents)["\n  query Education_Get($input: Api_education_getInput!) {\n    api_education_get(input: $input) {\n      data {\n        id\n        userId\n        userName\n        schoolName\n        achievement\n        dateOfAchievement\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Education_Create($input: Api_education_createInput!) {\n    api_education_create(input: $input) {\n      count\n      ids\n    }\n  }\n"): (typeof documents)["\n  mutation Education_Create($input: Api_education_createInput!) {\n    api_education_create(input: $input) {\n      count\n      ids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Education_Update($input: Api_education_updateInput!) {\n    api_education_update(input: $input) {\n      count\n      ids\n    }\n  }\n"): (typeof documents)["\n  mutation Education_Update($input: Api_education_updateInput!) {\n    api_education_update(input: $input) {\n      count\n      ids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Education_Delete($input: Api_education_deleteInput!) {\n    api_education_delete(input: $input) {\n      count\n      ids\n    }\n  }\n"): (typeof documents)["\n  mutation Education_Delete($input: Api_education_deleteInput!) {\n    api_education_delete(input: $input) {\n      count\n      ids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Members_List($input: Api_member_listInput!) {\n    api_member_list(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n"): (typeof documents)["\n  query Members_List($input: Api_member_listInput!) {\n    api_member_list(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n      page {\n        total\n        range {\n          from\n          to\n        }\n        page\n        pageSize\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Members_Aggregate($input: Api_member_aggregateInput!) {\n    api_member_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Members_Aggregate($input: Api_member_aggregateInput!) {\n    api_member_aggregate(input: $input) {\n      breakdown {\n        uniqueIdentifier\n        counts {\n          countBy\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Members_Get($input: Api_member_getInput!) {\n    api_member_get(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n    }\n  }\n"): (typeof documents)["\n  query Members_Get($input: Api_member_getInput!) {\n    api_member_get(input: $input) {\n      data {\n        id\n        email\n        createdAt\n        name\n        middleName\n        lastName\n        displayName\n        avatar\n        home_phoneNumber\n        business_phoneNumber\n        cell_phoneNumber\n        home_addressLine1\n        home_addressLine2\n        home_city\n        home_state\n        home_postalCode\n        home_country\n        business_addressLine1\n        business_addressLine2\n        business_city\n        business_state\n        business_postalCode\n        business_country\n        dental_degree\n        dental_school\n        dental_graduationYear\n        ortho_degree\n        ortho_school\n        ortho_graduationYear\n        postgraduate_degree\n        postgraduate_school\n        postgraduate_graduationYear\n        joinDate\n        rejoinDate\n        effectiveDate\n        expirationDate\n        memberType\n        memberPackage\n        isBlacklisted\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Members_Create($input: Api_member_createInput!) {\n    api_member_create(input: $input) {\n      count\n      ids\n    }\n  }\n"): (typeof documents)["\n  mutation Members_Create($input: Api_member_createInput!) {\n    api_member_create(input: $input) {\n      count\n      ids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Members_Update($input: Api_member_updateInput!) {\n    api_member_update(input: $input) {\n      count\n      ids\n    }\n  }\n"): (typeof documents)["\n  mutation Members_Update($input: Api_member_updateInput!) {\n    api_member_update(input: $input) {\n      count\n      ids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Members_Delete($input: Api_member_deleteInput!) {\n    api_member_delete(input: $input) {\n      count\n      ids\n    }\n  }\n"): (typeof documents)["\n  mutation Members_Delete($input: Api_member_deleteInput!) {\n    api_member_delete(input: $input) {\n      count\n      ids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription Ping_time {\n    ping_time {\n      iso\n      data\n    }\n  }\n"): (typeof documents)["\n  subscription Ping_time {\n    ping_time {\n      iso\n      data\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;