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
        name
        street1
        street2
        city
        state
        zip
      }
      checkIn
    }
  }
`;

export const QUERY_USERS = gql`
  query {
    users {
      _id
      phoneNumber
      firstName
      lastName
    } 
  }
`

export const QUERY_USER = gql`
  query($phoneNumber: String!) {
    user(phoneNumber: $phoneNumber) {
      _id
      phoneNumber
      firstName
      lastName
    }
  }
`

export const QUERY_ME = gql`
  query {
    me {
      _id
      phoneNumber
      firstName
      lastName
    }
  }
`
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
