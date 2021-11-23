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

export const QUERY_CHECKOUT_SESSION = gql`
  query checkoutSession($productName: String!, $unitAmount: Int!, $quantity: Int!) {
    checkoutSession(productName: $productName, unitAmount: $unitAmount, quantity: $quantity) {
      id
    }
  }
`;

export const QUERY_CONFIG = gql`
  query {
    config {
      STRIPE_PK
    }
  }
`;