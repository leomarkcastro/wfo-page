import { graphql } from '../generated';

export const InvoiceBatch_List = graphql(`
  query InvoiceBatch_List($input: Api_invoiceBatch_listInput!) {
    api_invoiceBatch_list(input: $input) {
      data {
        id
        customer
        batchID
        isOpen
        closedAt
        createdAt
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

export const InvoiceBatch_Get = graphql(`
  query Api_invoiceBatch_get($input: Api_invoiceBatch_getInput!) {
    api_invoiceBatch_get(input: $input) {
      data {
        id
        customer
        batchID
        isOpen
        closedAt
        createdAt
      }
    }
  }
`);

export const InvoiceBatch_Create = graphql(`
  mutation InvoiceBatch_Create($input: Api_invoiceBatch_createInput!) {
    api_invoiceBatch_create(input: $input) {
      count
      ids
    }
  }
`);

export const InvoiceBatch_Update = graphql(`
  mutation InvoiceBatch_Update($input: Api_invoiceBatch_updateInput!) {
    api_invoiceBatch_update(input: $input) {
      count
      ids
    }
  }
`);

export const InvoiceBatch_Delete = graphql(`
  mutation InvoiceBatch_Delete($input: Api_invoiceBatch_deleteInput!) {
    api_invoiceBatch_delete(input: $input) {
      count
      ids
    }
  }
`);
