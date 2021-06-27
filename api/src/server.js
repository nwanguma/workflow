const { GraphQLServer } = require("graphql-yoga");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { db } = require("./db/db");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    db,
  },
});

server.start(() => {
  console.log("Server is up and running");
});
