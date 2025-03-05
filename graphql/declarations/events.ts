import { gql } from '@apollo/client';

export const Events_List = gql`
  query Events_List($input: EventListInput!) {
    api_event_list(input: $input) {
      data {
        id
        title
        description
        startDate
        endDate
        location
        status
        createdAt
        updatedAt
      }
      page {
        total
        page
        pageSize
      }
    }
  }
`;

export const Events_Get = gql`
  query Events_Get($input: EventGetInput!) {
    api_event_get(input: $input) {
      data {
        id
        title
        description
        startDate
        endDate
        location
        status
        createdAt
        updatedAt
      }
    }
  }
`;

export const Events_Create = gql`
  mutation Events_Create($input: EventCreateInput!) {
    api_event_create(input: $input) {
      ids
    }
  }
`;

export const Events_Update = gql`
  mutation Events_Update($input: EventUpdateInput!) {
    api_event_update(input: $input) {
      ids
    }
  }
`;

export const Events_Delete = gql`
  mutation Events_Delete($input: EventDeleteInput!) {
    api_event_delete(input: $input) {
      ids
    }
  }
`;

export const Events_Aggregate = gql`
  query Events_Aggregate($input: EventAggregateInput!) {
    api_event_aggregate(input: $input) {
      count
    }
  }
`;

export const Events_GroupBy = gql`
  query Events_GroupBy($input: EventGroupByInput!) {
    api_event_groupBy(input: $input) {
      groups {
        key
        count
      }
    }
  }
`; 