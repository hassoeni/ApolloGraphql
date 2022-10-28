const { ApolloServer } = require('apollo-server')
const { context } = require('./context')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers, context: context, introspection: true })

server.listen().then(({ url }) =>
  console.log(`
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/js/graphql-sdl-first#using-the-graphql-api`),
)