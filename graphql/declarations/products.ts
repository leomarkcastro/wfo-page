import { graphql } from '../generated';

export const Products_List = graphql(`
  query Products_List($input: Api_products_listInput!) {
    api_products_list(input: $input) {
      data {
        id
        name
        price
        description
        photo
        note
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

export const Products_Get = graphql(`
  query Products_Get($input: Api_products_getInput!) {
    api_products_get(input: $input) {
      data {
        id
        name
        price
        description
        photo
        note
        createdAt
        updatedAt
      }
    }
  }
`);

export const Products_Create = graphql(`
  mutation Products_Create($input: Api_products_createInput!) {
    api_products_create(input: $input) {
      ids
      count
    }
  }
`);

export const Products_Update = graphql(`
  mutation Products_Update($input: Api_products_updateInput!) {
    api_products_update(input: $input) {
      count
      ids
    }
  }
`);

export const Products_Delete = graphql(`
  mutation Products_Delete($input: Api_products_deleteInput!) {
    api_products_delete(input: $input) {
      count
      ids
    }
  }
`);
