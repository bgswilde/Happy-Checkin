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

  type Query {
    me: User
    user(phoneNumber: String!): User
    users: [User]
  }

  type Mutation {
    login(phoneNumber: String!, password: String!): Auth
    addUser(role: Int!, phoneNumber: String!, firstName: String!, lastName: String!, password: String!): Auth
    updateUser(_id: ID!, role: Int!, phoneNumber: String!, firstName: String!, lastName: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addJob(checkIn: String!, confirmationKey: String!): Job
    updateJob(jobId: ID!): Job
    removeJob(jobId: ID!): Job
    
  }

`;

module.exports = typeDefs;
