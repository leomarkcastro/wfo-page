import { graphql } from '../generated';

export const ServicePurchase_List = graphql(`
  query Api_servicePurchase_list($input: Api_servicePurchase_listInput!) {
    api_servicePurchase_list(input: $input) {
      data {
        id
        product
        type
        total
        balanceDue
        cancelled
        cancelledAt
        note
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

export const ServicePurchase_Get = graphql(`
  query ServicePurchase_Get($input: Api_servicePurchase_getInput!) {
    api_servicePurchase_get(input: $input) {
      data {
        id
        product
        type
        total
        balanceDue
        cancelled
        cancelledAt
        note
        createdAt
      }
    }
  }
`);

export const ServicePurchase_Create = graphql(`
  mutation ServicePurchase_Create($input: Api_servicePurchase_createInput!) {
    api_servicePurchase_create(input: $input) {
      count
      ids
    }
  }
`);

export const ServicePurchase_Update = graphql(`
  mutation ServicePurchase_Update($input: Api_servicePurchase_updateInput!) {
    api_servicePurchase_update(input: $input) {
      count
      ids
    }
  }
`);

export const ServicePurchase_Delete = graphql(`
  mutation ServicePurchase_Delete($input: Api_servicePurchase_deleteInput!) {
    api_servicePurchase_delete(input: $input) {
      count
      ids
    }
  }
`);

export const ServicePurchase_Aggregate = graphql(`
  query Api_productFulfillment_aggregate(
    $input: Api_productFulfillment_aggregateInput!
  ) {
    api_productFulfillment_aggregate(input: $input) {
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
