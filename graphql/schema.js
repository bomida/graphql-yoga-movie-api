import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    rating: Float!
    runtime: Int!
    description_full: String!
    language: String!
    medium_cover_image: String!
  }

  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
`);


export default schema;