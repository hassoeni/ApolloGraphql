"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const resolvers_1 = __importDefault(require("./resolvers"));
const schema_1 = __importDefault(require("./schema"));
// const typeDefs = `#graphql
// `
const server = new server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default
});
const { url } = await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 }
});
console.log(`${url}`);
//# sourceMappingURL=index.js.map