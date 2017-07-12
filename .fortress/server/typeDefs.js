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

export default typeDefs;