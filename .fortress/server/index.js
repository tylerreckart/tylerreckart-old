import express from 'express';
import graphqlHTTP from 'express-graphql';
import postgraphql from 'postgraphql';
import { addMockFunctionsToSchema } from 'graphql-tools';
require('dotenv').config();

import schema from './schema';
import mocks from './mocks';

addMockFunctionsToSchema({
  schema,
  mocks,
});

const serve = async () => {
  const app = express();

  // app.use(postgraphql('postgres://localhost:5432'));

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

  app.listen(4000, () => console.log('GraphQL server up and running on localhost:4000/graphql'));
};serve();
