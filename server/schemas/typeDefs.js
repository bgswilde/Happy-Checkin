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
    customer: User
    checker: User
    package: Package
    hotel: Hotel
    feedback: Feedback
    checkInTime: String
    confirmationKey: String
    instructions: String
    options: Option
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
    name: String
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

  type Option {
    towels: Boolean
    pillows: Boolean
    down: Boolean
    rollaway: Boolean
    ice: Boolean
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
    reservations(userId: String!): [Reservation]
    allReservations: [Reservation]
    checkoutSession(productName: String!, unitAmount: Int!, quantity: Int!): CheckoutSession
    config: Config
  }

  type Mutation {
    login(phoneNumber: String!, password: String!): Auth

    addUser(role: Int!, phoneNumber: String!, firstName: String!, lastName: String!, password: String!, email: String!): User
    updateUser(role: Int, phoneNumber: String, firstName: String, lastName: String, password: String): Auth
    removeUser(userId: ID): User
    
    newReservation(checkInTime: String!, customer: User!, checker: User!, hotel: Hotel!, package: Package!, options: Option!)
    addReservation(userId: ID!, checkIn: String!, confirmationKey: String!, name: String!, street1: String!, street2: String, city: String!, state: String!, zip: Int!, title: String!, imageUrl: String!, cost: Int!, description: String ): Reservation
    updateReservation(jobId: ID!, checkIn: String, claimedAt: String, completedAt: String, confirmationKey: String, instructions: String ): Reservation
    removeReservation(jobId: ID!): Reservation
    
  }

`;

module.exports = typeDefs;
