const { ApolloServer, gql } = require('apollo-server');
const { GraphQLDateTime } = require('graphql-iso-date');
const { find, filter } = require('lodash');

require('dotenv').config();

const bookmarks = [
  {
    title: 'Fullstack Tutorial with GraphQL, React & Apollo',
    url: 'https://www.howtographql.com/react-apollo/0-introduction/',
    tags: ['graphql', 'reactjs'],
    added: '2019-04-20T13:17:25.125Z',
  },
  {
    title: 'CRA vs Next.js vs Gatsby - Comparison and How to Choose One',
    url: 'https://coffeencoding.com/cra-vs-next-js-vs-gatsby/',
    tags: ['nextjs', 'gatsbyjs', 'cra', 'reactjs'],
    added: '2019-04-20T13:18:27.698Z',
  },
  {
    title: 'GraphQL Server Basics: GraphQL Schemas, TypeDefs & Resolvers Explained | Prisma',
    url: 'https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e',
    tags: ['graphql'],
    added: '2019-04-22T05:06:48.831Z',
  }
];

const tags = [
  {
    id: 'graphql',
    name: 'graphql',
  },
  {
    id: 'reactjs',
    name: 'reactjs',
  },
  {
    id: 'nextjs',
    name: 'nextjs',
  },
  {
    id: 'gatsbyjs',
    name: 'gatsbyjs',
  },
  {
    id: 'cra',
    name: 'cra',
  },
];

const typeDefs = gql`
  scalar DateTime

  type Bookmark {
    title: String!
    url: String!
    tags: [Tag!]!
    added: DateTime!
  }

  type Tag {
    name: String!
    bookmarks: [Bookmark!]!
  }

  type Query {
    bookmarks: [Bookmark!]!
    tags: [Tag!]!
  }
`;

const resolvers = {
  Query: {
    bookmarks: () => bookmarks,
    tags: () => tags,
  },
  Bookmark: {
    tags: parent => filter(tags, tag => parent.tags.includes(tag.id))
  },
  Tag: {
    bookmarks: parent =>
      filter(bookmarks, bookmark => bookmark.tags.includes(parent.id)),
  },
  DateTime: GraphQLDateTime,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: process.env.ENGINE_API_KEY && {
    apiKey: process.env.ENGINE_API_KEY,
  },
  introspection: !!process.env.DEBUG,
  playground: !!process.env.DEBUG,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
