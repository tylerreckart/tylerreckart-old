import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { find } from 'lodash';
import moment from 'moment';
import casual from 'casual';
import colors from 'colors';

import schema from './schema';

const app = express();

const mocks = {
  Post: () => ({
    id: casual.integer(0,10),
    by: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    content: casual.description,
    title: casual.title,
    url: casual.url,
    public: true,
  }),
};

addMockFunctionsToSchema({ schema, mocks });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => console.log(`
GraphQL server up and running on ${`localhost:4000/graphql`.green}
`));