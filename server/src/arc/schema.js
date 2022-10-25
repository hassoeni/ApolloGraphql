// const { gql } = require('apollo-server')

// const typeDefs = gql`
// 	type Query {
// 		allUsers: [User!]!
// 		draftsByUser(userUniqueInput: UserUniqueInput!): [Post]
// 		feed(
// 			orderBy: PostOrderByUpdatedAtInput
// 			searchString: String
// 			skip: Int
// 			take: Int
// 		): [Post!]!
// 		postById(id: Int): Post
// 	}
// 	type Mutation {
// 		createDraft(authorEmail: String!, data: PostCreateInput!): Post
// 		deletePost(id: Int!): Post
// 		incrementPostViewCount(id: Int!): Post
// 		signupUser(data: UserCreateInput!): User!
// 		togglePublishPost(id: Int!): Post
// 	}

// 	type User {
// 		email: String!
// 		id: Int!
// 		name: String
// 		posts: [Post!]!
// 	}

// 	input UserCreateInput {
// 		email: String!
// 		name: String
// 		posts: [PostCreateInput!]
// 	}

// 	input UserUniqueInput {
// 		email: String
// 		id: Int
// 	}
// 	type Post {
// 		author: User
// 		content: String
// 		createdAt: DateTime!
// 		id: Int!
// 		published: Boolean!
// 		title: String!
// 		updatedAt: DateTime!
// 		viewCount: Int!
// 	}

// 	input PostCreateInput {
// 		content: String
// 		title: String!
// 	}

// 	input PostOrderByUpdatedAtInput {
// 		updatedAt: SortOrder!
// 	}

// 	enum SortOrder {
// 		asc
// 		desc
// 	}


// 	scalar DateTime
// `



// module.exports = {
// 	typeDefs,
// }
