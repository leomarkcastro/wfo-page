import { graphql } from '../generated';

export const Application_List = graphql(`
  query Application_List($input: Api_application_listInput!) {
    api_application_list(input: $input) {
      data {
        id
        name
        email
        phoneNumber
        country
        applicationDate
        status
        memberType
        society
        createdAt
        updatedAt
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

export const Application_Get = graphql(`
  query Application_Get($input: Api_application_getInput!) {
    api_application_get(input: $input) {
      data {
        id
        name
        email
        phoneNumber
        country
        applicationDate
        status
        memberType
        society
        createdAt
        updatedAt
      }
    }
  }
`);

export const Application_Create = graphql(`
  mutation Application_Create($input: Api_application_createInput!) {
    api_application_create(input: $input) {
      count
      ids
    }
  }
`);

export const Application_Update = graphql(`
  mutation Application_Update($input: Api_application_updateInput!) {
    api_application_update(input: $input) {
      count
      ids
    }
  }
`);

export const Application_Delete = graphql(`
  mutation Application_Delete($input: Api_application_deleteInput!) {
    api_application_delete(input: $input) {
      count
      ids
    }
  }
`);
