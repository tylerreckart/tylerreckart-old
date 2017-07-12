import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { find } from 'lodash';

// import mocks from './mocks';
// import resolvers from './resolvers';
// import typeDefs from './typeDefs';

const mocks = {
  Post: () => ({
    id: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    content: casual.description,
    title: casual.title,
    url: casual.url,
    public: true,
    related: []
  }),
};

const typeDefs = `
  type Post {
    id: Int!
    created: String
    content: String
    title: String
    url: String
    public: Boolean
    related: [Post]
  }

  type Query {
    post(id: Int!): Post
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    post: (_, { id }) => find(posts, { id: id }),
    posts: () => posts,
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;