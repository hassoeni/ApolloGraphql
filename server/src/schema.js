const { gql } = require('apollo-server')

const typeDefs = gql`
	type Query {
        "fetches all users from db"
		fetchAllUsers: [User!]!
		"fetch all our posts Posts"
		fetchAllPosts: [Post!]! 
	}

	"Defines what a user object is it needs an email and it has a list of posts"
	type User {
        "email of the user"
		email: String!
        "id of the user"
		id: ID!
        "name of the user"
		name: String
		"posts of the user"
		posts: [Post!]!
	}

	"Defines what a post object is"
	type Post {
		"the post id"
		id: ID! 
		"the post title"
		title: String! 
		"the post content"
		content: String 
		"checks if the post is published"
		published: Boolean!
		"the amount of views of the post"
		viewCount: Int! 
		"the author of the post in order to make work define Post in resolvers and define how author should return post by author id"
		author: User 
		"TimeSeries of the data object"
		createdAt: DateTime!
		updatedAt: DateTime! 
	}
 
	scalar DateTime
`



module.exports = {
	typeDefs,
}
