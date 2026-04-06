import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Simple schema definition
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// Resolver to return data
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
async function start() {
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`)  ;
};
start();