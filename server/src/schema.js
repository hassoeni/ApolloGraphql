const {gql} = require('apollo-server')

const typeDefs = gql`

type Query {
    "Get blog array for homepage grid" 
    fetchAllblog: [Blog!]!
}

"single blog item containing blog information"
type Blog {
    "id of the blog"
    id: ID! 
    "title of the blog"
    title: String! 
    "author who made the blog"
    author: Author! 
    "blog description"
    description: String 
}

"Author of a complete Blog" 
type Author {
    id: ID! 
    name: String! 
    email: String! 
}
`

module.exports = typeDefs