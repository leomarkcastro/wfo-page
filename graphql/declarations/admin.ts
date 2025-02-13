import { graphql } from '../generated';

export const Api_sync_crm_wordpress = graphql(`
  mutation Api_sync_crm_wordpress($input: Api_sync_crm_wordpressInput!) {
    api_sync_crm_wordpress(input: $input) {
      success
    }
  }
`);

export const Api_sync_crm_netforum = graphql(`
  mutation Api_sync_crm_netforum($input: Api_sync_crm_netforumInput!) {
    api_sync_crm_netforum(input: $input) {
      success
    }
  }
`);

export const Api_sync_from_netforum = graphql(`
  mutation Api_sync_from_netforum($input: Api_sync_from_netforumInput!) {
    api_sync_from_netforum(input: $input) {
      count
    }
  }
`);

export const Api_sync_from_wordpress = graphql(`
  mutation Api_sync_from_wordpress($input: Api_sync_from_wordpressInput!) {
    api_sync_from_wordpress(input: $input) {
      count
    }
  }
`);

export const Api_timecheck = graphql(`
  query Api_timecheck($input: Api_timecheckInput!) {
    api_timecheck(input: $input) {
      time
    }
  }
`);
