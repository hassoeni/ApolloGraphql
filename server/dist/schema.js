import { gql } from "apollo-server";
const typeDefs = gql `
   type Book {
     title: String
     author: String
   },

   type Query {
     books: [Book]
   }


# type Query {
#     tracksForHome: [Track!]!
#     "define queries here "
# }

# type Track { 
#     id: ID!
#     title: String! 
#     thumbnail: String 
#     length: Int 
#     modulesCount: Int 
#     "Later add also author"
# }
`;
module.exports = typeDefs;
