import { graphql } from '../generated';

export const Education_List = graphql(`
  query Education_List($input: Api_education_listInput!) {
    api_education_list(input: $input) {
      data {
        id
        userId
        userName
        schoolName
        achievement
        dateOfAchievement
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

export const Education_Aggregate = graphql(`
  query Education_Aggregate($input: Api_education_aggregateInput!) {
    api_education_aggregate(input: $input) {
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

export const Education_Get = graphql(`
  query Education_Get($input: Api_education_getInput!) {
    api_education_get(input: $input) {
      data {
        id
        userId
        userName
        schoolName
        achievement
        dateOfAchievement
      }
    }
  }
`);

export const Education_Create = graphql(`
  mutation Education_Create($input: Api_education_createInput!) {
    api_education_create(input: $input) {
      count
      ids
    }
  }
`);

export const Education_Update = graphql(`
  mutation Education_Update($input: Api_education_updateInput!) {
    api_education_update(input: $input) {
      count
      ids
    }
  }
`);

export const Education_Delete = graphql(`
  mutation Education_Delete($input: Api_education_deleteInput!) {
    api_education_delete(input: $input) {
      count
      ids
    }
  }
`);
