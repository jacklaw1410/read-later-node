import { ApolloServer, gql } from 'apollo-server';
import { GraphQLDateTime } from 'graphql-iso-date';
import { find, filter } from 'lodash';
import resolvers from './resolvers';
import typeDefs from './schema';
import models, { sequelize } from './models';

require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: process.env.ENGINE_API_KEY && {
    apiKey: process.env.ENGINE_API_KEY,
  },
  introspection: !!process.env.DEBUG,
  playground: !!process.env.DEBUG,
  context: () => {
    return { models };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
