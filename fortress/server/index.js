import express from 'express';
import graphqlHTTP from 'express-graphql';
import postgraphql from 'postgraphql';
import { addMockFunctionsToSchema } from 'graphql-tools';
import cors from 'cors';
require('dotenv').config();

import schema from './schema';
import mocks from './mocks';

addMockFunctionsToSchema({
  schema,
  mocks,
});

const serve = () => {
  const app = express();

  // PostgreSQL
  app.use(postgraphql(
    'postgres://localhost:5432/treckart',
    'fortress',
    { graphiql: true }
  ));

  // Headers
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  // GraphQL
  // app.use('/graphql', cors(), graphqlHTTP({
  //   schema,
  //   graphiql: true
  // }));

  app.listen(8080, () => console.log('GraphiQL served at localhost:8080/graphiql'));
};serve();
