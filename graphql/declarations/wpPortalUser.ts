import { graphql } from '../generated';

export const Api_wpportaluser_list = graphql(`
  query Api_wpportaluser_list($input: Api_wpportaluser_listInput!) {
    api_wpportaluser_list(input: $input) {
      data {
        user_id
        first_name
        last_name
        email
        registered_date
        avatar_url
        roles
        profile_fields {
          value
          group
          field_id
          field_type
        }
        courses_count
        courses {
          course_id
          title
          enrollment_date
          completion_date
          progress_percentage
          completed_steps
          total_steps
          status
        }
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

export const Api_wpportaluser_get = graphql(`
  query Api_wpportaluser_get($input: Api_wpportaluser_getInput!) {
    api_wpportaluser_get(input: $input) {
      data {
        user_id
        first_name
        last_name
        email
        registered_date
        avatar_url
        roles
        profile_fields {
          value
          group
          field_id
          field_type
        }
        courses_count
        courses {
          course_id
          title
          enrollment_date
          completion_date
          progress_percentage
          completed_steps
          total_steps
          status
        }
      }
    }
  }
`);
