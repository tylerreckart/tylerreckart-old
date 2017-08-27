import { find } from 'lodash';

const resolvers = {
  Query: {
    post: (_, { id }) => find(posts, { id: id }),
    posts: () => posts,
  },
};

export default resolvers;