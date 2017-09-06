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
    post(
      id: Int
      url: String
    ): Post
    posts: [Post]
  }
`;

export default typeDefs;