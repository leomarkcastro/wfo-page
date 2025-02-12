import { graphql } from '../generated';

export const Api_sync_users = graphql(`
  mutation Api_sync_users($input: Api_sync_usersInput!) {
    api_sync_users(input: $input) {
      count
    }
  }
`);

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
