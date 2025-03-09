import { graphql } from '../generated';

export const Society_List = graphql(`
  query Society_List($input: Api_society_listInput!) {
    api_society_list(input: $input) {
      data {
        id
        name
        description
        address
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

export const Society_Get = graphql(`
  query Society_Get($input: Api_society_getInput!) {
    api_society_get(input: $input) {
      data {
        id
        name
        description
        address
        createdAt
        updatedAt
      }
    }
  }
`);

export const Society_Create = graphql(`
  mutation Society_Create($input: Api_society_createInput!) {
    api_society_create(input: $input) {
      count
      ids
    }
  }
`);

export const Society_Update = graphql(`
  mutation Society_Update($input: Api_society_updateInput!) {
    api_society_update(input: $input) {
      count
      ids
    }
  }
`);

export const Society_Delete = graphql(`
  mutation Society_Delete($input: Api_society_deleteInput!) {
    api_society_delete(input: $input) {
      count
      ids
    }
  }
`);
