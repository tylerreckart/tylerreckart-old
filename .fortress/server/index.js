import express from 'express';
import graphqlHTTP from 'express-graphql';
require('dotenv').config();

import schema from './schema';
import connectdb from '../database';

const serve = async () => {
  const mongo = await connectdb();
  const app = express();

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

  app.listen(4000, () => console.log('GraphQL server up and running on localhost:4000/graphql'));
};serve();
