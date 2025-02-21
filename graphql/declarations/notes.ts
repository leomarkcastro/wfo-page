import { graphql } from '../generated';

export const Notes_List = graphql(`
  query Notes_List($input: Api_note_listInput!) {
    api_note_list(input: $input) {
      data {
        id
        userId
        userName
        content
        type
        title
        metadata
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

export const Notes_Get = graphql(`
  query Notes_Get($input: Api_note_getInput!) {
    api_note_get(input: $input) {
      data {
        id
        userId
        userName
        content
        type
        title
        metadata
        createdAt
      }
    }
  }
`);

export const Notes_Create = graphql(`
  mutation Notes_Create($input: Api_note_createInput!) {
    api_note_create(input: $input) {
      ids
      count
    }
  }
`);

export const Notes_Update = graphql(`
  mutation Notes_Update($input: Api_note_updateInput!) {
    api_note_update(input: $input) {
      count
      ids
    }
  }
`);

export const Notes_Delete = graphql(`
  mutation Notes_Delete($input: Api_note_deleteInput!) {
    api_note_delete(input: $input) {
      count
      ids
    }
  }
`);
