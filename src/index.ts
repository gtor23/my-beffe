import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
async function start() {
  if(!process.env.MOCK_API_BASE) {
    console.error("Error: MOCK_API_BASE environment variable is not set.");
    process.exit(1);
  }

const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT ? Number(process.env.PORT) : 4000 },
  });
  console.log(`🚀 Server ready at ${url}`)  ;
};
start();