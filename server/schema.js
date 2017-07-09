import { makeExecutableSchema } from 'graphql-tools';
import { find } from 'lodash';

const typeDefs = `
  type User {
    id: Int!
    created: String
    firstName: String
    lastName: String
    about: String
    submitted: [Post]
  }

  type Post {
    id: Int!
    by: Int
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
    user(id: Int!): User
    users: [User]
  }
`;

const resolvers = {
  Query: {
    post: (_, { id }) => find(posts, { id: id }),
    posts: () => posts,
    user: (_, { id }) => find(users, { id: id }),
    users: () => users,
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;