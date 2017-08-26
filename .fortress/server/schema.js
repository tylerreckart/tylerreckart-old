import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { find } from 'lodash';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;