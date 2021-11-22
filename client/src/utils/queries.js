import { gql } from '@apollo/client';

export const QUERY_JOBS = gql`
query {
    jobs {
      _id
      createdAt
      instructions
      package {
          cost
          description
          imageUrl
          title
      }
      customer {
        displayName
        phoneNumber
      }
      hotel {
        street1
        city
        state
        zip
      }
      checkIn
    }
  }
`;