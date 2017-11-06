import express from 'express';
import postgraphql from 'postgraphql';
import cors from 'cors';
require('dotenv').config();

const serve = () => {
  const app = express();

  app.use(cors(), postgraphql(
    'postgres://localhost:5432/treckart',
    'fortress',
    { graphiql: true }
  ));

  app.listen(8080, () => console.log('GraphiQL served at localhost:8080/graphiql'));
};serve();
