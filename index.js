import { createServer } from "@graphql-yoga/node";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const server = createServer({
  schema: {
    typeDefs: schema,
    resolvers,
  }
});

server.start(() => console.log("Graphql Server Running"));