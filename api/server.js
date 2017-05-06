'use strict';

var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

// This is what we want to build our query around:
// Return a single post with a given id:
// {
//   post(id: 0) {
//     body
//     date
//     id
//     preview
//     public
//     title
//   }
// }
// Return all posts
// {
//   posts {
    // body
    // date
    // id
    // preview
    // public
    // title
//   }
// }

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tylerreckart');
var POST = mongoose.model('Post', {
    body: String,
    date: Date,
    id: mongoose.Schema.Types.ObjectId,
    preview: String,
    public: Boolean,
    title: String,
});

var Posts = [
    {
        body: 'lorem ipsum',
        date: Date.now(),
        id: 0,
        preview: 'lorem ipsum',
        public: true,
        title: 'Lorem Ipsum',
     },
     {
        body: 'lorem tipsum',
        date: (Date.now() / 2),
        id: 1,
        preview: 'lorem tipsum',
        public: true,
        title: 'Lorem Tipsum',
     },
];

// Construct a schema, using GraphQL schema language
var schema = graphql.buildSchema(`
    type Post {
        body: String!
        date: String!
        id: ID!
        preview: String!
        public: Boolean!
        title: String!
    }
    type Query {
        post(id: Int!): Post
        posts: [Post]
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
    post: (args) => {
        for (let i = 0; i < Posts.length; i++) {
            if (Posts[i].id === args.id) {
                return Posts[i];
            };
        }
    },
    posts: () => {
        return new Promise((resolve, reject) => {
            POST.find((err, posts) => {
                if (err) reject(err);
                else resolve(posts);
            });
        });;
    },
};

var app = express();
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);

console.log(`
                                     )
                            )      ((     (
                           (        ))     )
                    )       )      //     (
               _   (        __    (     ~->>
        ,-----' |__,_~~___<'__')-~__--__-~->> <
        | //  : | -__   ~__ o)____)),__ - '> >-  >
        | //  : |- \_ \ -\_\ -\ \ \ ~\_  \ ->> - ,  >>
        | //  : |_~_\ -\__\ \~'\ \ \, \__ . -<-  >>
        '-----._| '  -__'-- - ~~ -- ' --~> >
         _/___\_    //)_'//  | ||]
   _____[_______]_[~~-_ (.L_/  ||
  [____________________]' '\_,/'/
    ||| /          |||  ,___,'./
    ||| \          |||,'______|
    ||| /          /|| I==||
    ||| \       __/_||  __||__
-----||-/------'-._/||-o--o---o---
  ~~~~~'
  
Running GraphQL API server at localhost:4000/api
`);