import { createServer } from "@graphql-yoga/node";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";

import "./graphql/schema";

const server = createServer({
  schema: {
    typeDefs: schema,
    resolvers,
  }
});

server.start(() => console.log("Graphql Server Running"));