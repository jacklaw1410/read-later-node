import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    bookmarks: [Bookmark!]!
    bookmark(id: ID!): Bookmark!
  }

  type Bookmark {
    title: String!
    url: String!
    tags: [Tag!]!
    added: DateTime!
    finished: DateTime!
  }
`;
