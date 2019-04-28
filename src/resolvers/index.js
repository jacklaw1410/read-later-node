import { GraphQLDateTime } from 'graphql-iso-date';
import bookmarkResolvers from './bookmark';
import tagResolvers from './tag';

export default [
  {
    DateTime: GraphQLDateTime,
  },
  bookmarkResolvers,
  tagResolvers,
];
