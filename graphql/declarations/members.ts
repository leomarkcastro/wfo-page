import { graphql } from '../generated';

export const Members_List = graphql(`
  query Users(
    $where: UserWhereInput!
    $orderBy: [UserOrderByInput!]!
    $skip: Int!
    $take: Int
  ) {
    users(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
      id
      name
      lastName
      displayName
      email
      role
      createdAt
      groupsCount
      lastLogin
      loginHistoryCount
      flagsCount
      phoneNumber
      wfoID
      aaoID
      addressLine1
      addressLine2
      city
      state_province
      postalCode
      country
      companyName
      companyContactPerson
      companyContactPhone
      companyContactEmail
      isBlacklisted
      educationRecordsCount
      subscriptionsCount
      systemFlagsCount
    }
    usersCount(where: $where)
  }
`);

export const Members_Get = graphql(`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      name
      lastName
      displayName
      email
      role
      createdAt
      groupsCount
      lastLogin
      loginHistoryCount
      flagsCount
      phoneNumber
      wfoID
      aaoID
      addressLine1
      addressLine2
      city
      state_province
      postalCode
      country
      companyName
      companyContactPerson
      companyContactPhone
      companyContactEmail
      isBlacklisted
      educationRecordsCount
      subscriptionsCount
      systemFlagsCount
    }
  }
`);

export const Members_Create = graphql(`
  mutation Members_Create($data: [UserCreateInput!]!) {
    createUsers(data: $data) {
      id
      name
      lastName
      displayName
      email
      role
      createdAt
      groupsCount
      lastLogin
      loginHistoryCount
      flagsCount
      phoneNumber
      wfoID
      aaoID
      addressLine1
      addressLine2
      city
      state_province
      postalCode
      country
      companyName
      companyContactPerson
      companyContactPhone
      companyContactEmail
      isBlacklisted
      educationRecordsCount
      subscriptionsCount
      systemFlagsCount
    }
  }
`);

export const Members_Update = graphql(`
  mutation Members_Update($data: [UserUpdateArgs!]!) {
    updateUsers(data: $data) {
      id
      name
      lastName
      displayName
      email
      role
      createdAt
      groupsCount
      lastLogin
      loginHistoryCount
      flagsCount
      phoneNumber
      wfoID
      aaoID
      addressLine1
      addressLine2
      city
      state_province
      postalCode
      country
      companyName
      companyContactPerson
      companyContactPhone
      companyContactEmail
      isBlacklisted
      educationRecordsCount
      subscriptionsCount
      systemFlagsCount
    }
  }
`);

export const Members_Delete = graphql(`
  mutation DeleteUsers($where: [UserWhereUniqueInput!]!) {
    deleteUsers(where: $where) {
      id
      name
      lastName
      displayName
      email
      role
      createdAt
      groupsCount
      lastLogin
      loginHistoryCount
      flagsCount
      phoneNumber
      wfoID
      aaoID
      addressLine1
      addressLine2
      city
      state_province
      postalCode
      country
      companyName
      companyContactPerson
      companyContactPhone
      companyContactEmail
      isBlacklisted
      educationRecordsCount
      subscriptionsCount
      systemFlagsCount
    }
  }
`);
