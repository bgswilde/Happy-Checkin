const express = require('express');
const path = require('path');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

// start apollo server and apply middleware
const startServer = async () => {

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: authMiddleware
  });

  await server.start();

  await server.applyMiddleware({ app });
  
  // conditionally log graphqlPath
  if (process.env.NODE_ENV === 'development') {
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  }
};

startServer();

// additional middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});