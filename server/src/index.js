
const { ApolloServer } = require('apollo-server') //V3
const { context } = require('./context');
const typeDefs = require('./schema');


const server = new ApolloServer({
    context: context,
    typeDefs,
    introspection: true, 
});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});