import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    tags: [Tag!]!
    tag(id: ID!): Tag!
  }

  type Tag {
    name: String!
    bookmarks: [Bookmark!]!
  }
`;
