const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    role: Int
    phoneNumber: String
    firstName: String
    lastName: String
    displayName: String
  }

  type Reservation {
    _id: ID
    createdAt: String
    claimedAt: String
    completedAt: String
    checkIn: String
    instructions: String
    customer: [User]
    checker: [User]
    package: [Package]
    hotel: [Hotel]
    feedback: [Feedback]
  }

  type Package {
    _id: ID
    title: String
    imageUrl: String
    cost: Int
    description: String
  }

  type Hotel {
    _id: ID
    street1: String
    street2: String
    city: String
    state: String
    zip: Int
  }

  type Feedback {
    _id: ID
    rating: Int
    body: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type CheckoutSession {
    id: String
  }

  type Config {
    STRIPE_PK: String
  }

  type Query {
    me: User
    user(phoneNumber: String!): User
    users: [User]
    reservationss: [Reservation]
    checkoutSession(productName: String!, unitAmount: Int!, quantity: Int!): CheckoutSession
    config: Config
  }

  type Mutation {
    login(phoneNumber: String!, password: String!): Auth

    addUser(phoneNumber: String!, firstName: String!, lastName: String!, password: String!): Auth
    updateUser(role: Int, phoneNumber: String, firstName: String, lastName: String, password: String): User
    removeUser(userId: ID): User
    
    addReservation(userId: String!, checkIn: String!, confirmationKey: String!, name: String!, street1: String!, street2: String, city: String!, state: String!, zip: Int!, title: String!, imageUrl: String!, cost: Int!, description: String ): Reservation
    updateReservation(reservationId: ID!, checkIn: String, claimedAt: String, completedAt: String, confirmationKey: String, instructions: String ): Reservation
    removeReservation(reservationId: ID!): Reservation
    
  }

`;

module.exports = typeDefs;
