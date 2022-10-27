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
		"fetch all complexen"
		fetchAllComplexen: [Complex!]!
		"fetch complex by id"
		fetchSingleComplex(id: Int!): Complex
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
		"add complex"
		addComplex(authorEmail: String!, data: CreateComplexInput, ): Complex
		"update complex"
		updateComplex(id: Int!, data: CreateComplexInput): Complex
		"delete complex"
		deleteComplex(id: Int!): Complex
	}

	"defines authentication payload returns the full user object and a token" 
	type Authpayload {
		token: String 
		user: User 
	}

	"Defines what a complex object is it needs at least a complexname and gbo to be made"
	type Complex {
		"complex object id"
		id: Int! 
		"the complexnumber"
		complexnummer: Int! 
		"TimeSeries of the data object"
		createdAt: DateTime!
		updatedAt: DateTime! 
		"current name of the object"
		complexnaam: String! 
		"current size of the object"
		gbo: Int!
		"current market value of the object" 
		marktwaarde: Int
		"rent" 
		huur: Int 
		"desired rent"
		streefhuur: Int 
		"planed maintanance of the object"
		po: Int
		"the user of the complex in order to make work define complex in resolvers and define how user should return complex by user id"
		gebruiker: User
		
		# code: Int! 
		# success: Boolean!
		# message: String!   
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
		"user is allowed to upload a photo"
		profilephoto: String 
		"posts of the user non nullable list because prisma defined as Post[]"
		posts: [Post!]! 
		"Complexen associated with the user is a non nullable list because prisma defined it as Complex[]"
		complexen: [Complex!]!
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
 
	input CreateComplexInput {
		"what is the compelex name?"
		complexnaam: String! 
		"What is the complexnumber"
		complexnummer: Int!
		"hoe groot is het complex?"
		gbo: Int
		"wat is de marktwaarde"
		marktwaarde: Int
		"huur"
		huur: Int 
		"streefhuur"
		streefhuur: Int
		"wat is de gemiddelde PO"
		po: Int
	}

	

	scalar DateTime
`



module.exports = {
	typeDefs,
}
