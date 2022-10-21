import { plugin } from "nexus"

const { ApolloServer, gql } = require('apollo-server-cloud-functions')
const {
	ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
	typeDefs,
	resolvers,
    introspection: true, 
    cache: 'bounded',
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true }),]
      

    })

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
})

console.log(`Houston we have lift off at: ${url}`)
