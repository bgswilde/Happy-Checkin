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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(role: Int!, phoneNumber: String!, firstName: String!, lastName: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
