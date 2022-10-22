"use strict";
const books = [
    {
        title: "The awakening",
        author: "Kate Chaplin"
    },
    {
        title: "City of Glass",
        author: "Paul Auster"
    }
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map