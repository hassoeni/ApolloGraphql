const { ApolloServer } = require('apollo-server')
const { createContext } = require('./context')
// const { resolvers } = require('./resolvers')
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Post = require('./resolvers/Post');
const Complex = require('./resolvers/Complex');
const fs = require('fs');
const path = require('path');

const resolvers = {
  Query,
  Mutation,
  User,
  Complex,
  Post
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: createContext,
  introspection: true
})

server.listen().then(({ url }) =>
  console.log(`
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/js/graphql-sdl-first#using-the-graphql-api`),
)