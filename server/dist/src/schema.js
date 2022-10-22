"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
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
//# sourceMappingURL=schema.js.map