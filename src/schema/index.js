import { gql } from 'apollo-server';
import bookmarkSchema from './bookmark';
import tagSchema from './tag';

const linkSchema = gql`
  scalar DateTime

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, bookmarkSchema, tagSchema];
