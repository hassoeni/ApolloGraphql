const { gql } = require('apollo-server')

const typeDefs = gql`
	type Query {
        "fetches all users from db"
		fetchAllUsers: [User!]!
	}
	type User {
        "email of the user"
		email: String!
        "id of the user"
		id: ID!
        "name of the user"
		name: String
	}
`



module.exports = {
	typeDefs,
}
