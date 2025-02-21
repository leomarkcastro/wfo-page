import { graphql } from '../generated';

export const Members_List = graphql(`
  query Members_List($input: Api_member_listInput!) {
    api_member_list(input: $input) {
      data {
        id
        email
        createdAt
        updatedAt
        society
        name
        middleName
        lastName
        displayName
        prefix
        suffix
        avatar
        about
        home_phoneNumber
        business_phoneNumber
        cell_phoneNumber
        home_addressLine1
        home_addressLine2
        home_city
        home_state
        home_postalCode
        home_country
        business_addressLine1
        business_addressLine2
        business_city
        business_state
        business_postalCode
        business_country
        dental_degree
        dental_school
        dental_graduationYear
        ortho_degree
        ortho_school
        ortho_graduationYear
        postgraduate_degree
        postgraduate_school
        postgraduate_graduationYear
        joinDate
        rejoinDate
        effectiveDate
        expirationDate
        memberType
        memberPackage
        isBlacklisted
      }
      page {
        total
        range {
          from
          to
        }
        page
        pageSize
      }
    }
  }
`);

export const Members_Aggregate = graphql(`
  query Members_Aggregate($input: Api_member_aggregateInput!) {
    api_member_aggregate(input: $input) {
      breakdown {
        uniqueIdentifier
        counts {
          countBy
          count
        }
      }
    }
  }
`);

export const Members_Get = graphql(`
  query Members_Get($input: Api_member_getInput!) {
    api_member_get(input: $input) {
      data {
        id
        email
        createdAt
        updatedAt
        society
        about
        name
        middleName
        lastName
        displayName
        suffix
        prefix
        avatar
        home_phoneNumber
        business_phoneNumber
        cell_phoneNumber
        home_addressLine1
        home_addressLine2
        home_city
        home_state
        home_postalCode
        home_country
        business_addressLine1
        business_addressLine2
        business_city
        business_state
        business_postalCode
        business_country
        dental_degree
        dental_school
        dental_graduationYear
        ortho_degree
        ortho_school
        ortho_graduationYear
        postgraduate_degree
        postgraduate_school
        postgraduate_graduationYear
        joinDate
        rejoinDate
        effectiveDate
        expirationDate
        memberType
        memberPackage
        isBlacklisted
      }
    }
  }
`);

export const Members_Create = graphql(`
  mutation Members_Create($input: Api_member_createInput!) {
    api_member_create(input: $input) {
      count
      ids
    }
  }
`);

export const Members_Update = graphql(`
  mutation Members_Update($input: Api_member_updateInput!) {
    api_member_update(input: $input) {
      count
      ids
    }
  }
`);

export const Members_Delete = graphql(`
  mutation Members_Delete($input: Api_member_deleteInput!) {
    api_member_delete(input: $input) {
      count
      ids
    }
  }
`);
