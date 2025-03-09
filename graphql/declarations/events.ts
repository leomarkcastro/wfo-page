import { graphql } from '../generated';

export const Events_List = graphql(`
  query Events_List($input: Api_event_listInput!) {
    api_event_list(input: $input) {
      data {
        id
        title
        description
        startDate
        endDate
        location
        isCancelled
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

export const Events_Get = graphql(`
  query Events_Get($input: Api_event_getInput!) {
    api_event_get(input: $input) {
      data {
        id
        title
        description
        startDate
        endDate
        location
        isCancelled
        createdAt
        updatedAt
      }
    }
  }
`);

export const Events_Create = graphql(`
  mutation Events_Create($input: Api_event_createInput!) {
    api_event_create(input: $input) {
      count
      ids
    }
  }
`);

export const Events_Update = graphql(`
  mutation Events_Update($input: Api_event_updateInput!) {
    api_event_update(input: $input) {
      count
      ids
    }
  }
`);

export const Events_Delete = graphql(`
  mutation Events_Delete($input: Api_event_deleteInput!) {
    api_event_delete(input: $input) {
      count
      ids
    }
  }
`);
