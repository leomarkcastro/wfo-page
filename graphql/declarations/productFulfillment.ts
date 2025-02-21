import { graphql } from '../generated';

export const ProductFulfillment_List = graphql(`
  query ProductFulfillment_List($input: Api_productFulfillment_listInput!) {
    api_productFulfillment_list(input: $input) {
      data {
        id
        product
        package
        price
        quantity
        total
        balance
        shipped
        returnedCancelled
        returnedCancelledAt
        note
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

export const ProductFulfillment_Get = graphql(`
  query Api_productFulfillment_get($input: Api_productFulfillment_getInput!) {
    api_productFulfillment_get(input: $input) {
      data {
        id
        product
        package
        price
        quantity
        total
        balance
        shipped
        returnedCancelled
        returnedCancelledAt
        note
      }
    }
  }
`);

export const ProductFulfillment_Create = graphql(`
  mutation ProductFulfillment_Create(
    $input: Api_productFulfillment_createInput!
  ) {
    api_productFulfillment_create(input: $input) {
      count
      ids
    }
  }
`);

export const ProductFulfillment_Update = graphql(`
  mutation ProductFulfillment_Update(
    $input: Api_productFulfillment_updateInput!
  ) {
    api_productFulfillment_update(input: $input) {
      ids
      count
    }
  }
`);

export const ProductFulfillment_Delete = graphql(`
  mutation ProductFulfillment_Delete(
    $input: Api_productFulfillment_deleteInput!
  ) {
    api_productFulfillment_delete(input: $input) {
      ids
      count
    }
  }
`);

export const ProductFulfillment_Aggregate = graphql(`
  query Api_productFulfillment_aggregate(
    $input: Api_productFulfillment_aggregateInput!
  ) {
    api_productFulfillment_aggregate(input: $input) {
      breakdown {
        countBy
        count
      }
    }
  }
`);

export const ProductFulfillment_GroupBy = graphql(`
  query ProductFulfillment_GroupBy(
    $input: Api_productFulfillment_groupByInput!
  ) {
    api_productFulfillment_groupBy(input: $input) {
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
