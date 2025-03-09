import { graphql } from '../generated';

export const Invoice_List = graphql(`
  query Invoice_List($input: Api_invoice_listInput!) {
    api_invoice_list(input: $input) {
      data {
        id
        customerName
        items {
          id
          name
          price
          quantity
        }
        total
        createdAt
        paidAt
        status
        paymentLink
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

export const Invoice_Get = graphql(`
  query Invoice_Get($input: Api_invoice_getInput!) {
    api_invoice_get(input: $input) {
      data {
        id
        customerName
        items {
          id
          name
          price
          quantity
        }
        total
        createdAt
        paidAt
        status
        paymentLink
      }
    }
  }
`);

export const Invoice_Create = graphql(`
  mutation Invoice_Create($input: Api_invoice_createInput!) {
    api_invoice_create(input: $input) {
      count
      ids
    }
  }
`);

export const Invoice_Update = graphql(`
  mutation Invoice_Update($input: Api_invoice_updateInput!) {
    api_invoice_update(input: $input) {
      count
      ids
    }
  }
`);

export const Invoice_Delete = graphql(`
  mutation Invoice_Delete($input: Api_invoice_deleteInput!) {
    api_invoice_delete(input: $input) {
      count
      ids
    }
  }
`);
