var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var schema = graphql.buildSchema(`
    type Query {
        post: String
    }
`);

var root = {
    hello: () => {
        return 'Hello, World!';
    },
};

var app = express();
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running GraphQL API serverat localhost:4000/api');