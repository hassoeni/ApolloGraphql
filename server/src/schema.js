const { gql } = require('apollo-server')

const typeDefs = gql`
	type Query {
        "fetches all users from db"
		fetchAllUsers: [User!]!
		"fetch all our posts Posts"
		fetchAllPosts: [Post!]!
		"fetch single post by id"
		fetchSinglePost(id: Int!): Post 
		"fetch user by email"
		fetchUniqueUser(email: String!): User
	}

	type Mutation {
		"For signing up a user you should provide a email and password."
		signUpuser(data: CreateUserInputs!): User!
		"Let's users add a blog post after providing an email"
		addBlogPost(authorEmail: String!, data: CreatePostInputs!): Post 
		"signs a user in if the email matches the provided input email"
		signInUser(email: String!, password: String!): User! 
		"deletes a blog post"
		deleteBlogPost(id: Int!): Post
	}

	"Defines what a user object is it needs an email and it has a list of posts"
	type User {
        "id of the user"
		id: Int!
        "email of the user"
		email: String!
        "name of the user"
		name: String
		"the password of the user"
		password: String!
		"posts of the user non nullable list because prisma defined as Post[]"
		posts: [Post!]! 
	}

	"Defines what a post object is"
	type Post {
		"the post id"
		id: Int! 
		"TimeSeries of the data object"
		createdAt: DateTime!
		updatedAt: DateTime! 
		"the post title"
		title: String! 
		"the post content"
		content: String 
		"checks if the post is published"
		published: Boolean!
		"the amount of views of the post should be interactive"
		viewCount: Int! 
		"the author of the post in order to make work define Post in resolvers and define how author should return post by author id"
		author: User 
	}

	input CreateUserInputs {
		email: String! 
		name: String 
		password: String! 
	}

	input CreatePostInputs {
		"What title should the post have?"
		title: String! 
		"Write some content it's fun"
		content: String 
		"Do you want to publish your post?"
		published: Boolean! 
	}
 
	scalar DateTime
`



module.exports = {
	typeDefs,
}
