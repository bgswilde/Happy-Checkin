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

  type Job {
    _id: ID
    createdAt: Date
    claimedAt: Date
    completedAt: Date
    package: Package
    customer: String
    checker: String
    feedback: FeedbackSchema
    checkIn: Date
    instructions: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user: [User]
    users: User
  }

  type Mutation {
    login(phoneNumber: String!, password: String!): User
    addUser(role: Int!, phoneNumber: String!, firstName: String!, lastName: String!, password: String!): Auth
    
  }

`;

module.exports = typeDefs;
