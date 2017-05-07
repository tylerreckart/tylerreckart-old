'use strict';

require('dotenv').config();
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
// Set up the default mongoose connection
console.log(`Database URL: ${process.env.REACT_APP_DB_URL}`)
mongoose.connect(process.env.REACT_APP_DB_URL);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var POST = mongoose.model('Post', {
    body: String,
    date: Date,
    id: mongoose.Schema.Types.ObjectId,
    preview: String,
    public: Boolean,
    title: String,
});

var seedData = {
    "body": "\nOver the past few weeks, I've been reading through and studying the problems in Programming Pearls in an effort to better understand algorithms and their design. In the book, there's an excellent example of a binary search implementation. Working through the solution really caught my interest and inspired me to work through a front end implementation of a similar algorithm in JavaScript.  \n\nOur binary search algorithm will work by evaluating a value in a set and determining if it is equal to, less than, or greater than the value you are searching for. If the key value is less than the the current index value, the stop index is set to the value of the current index - 1. If the greater than the current index value, the start index is set to the value of the current index + 1. If the key value is equal to the current index value, the search stops.  \n\nLet's define a problem to build our algorithm around:  \n\nGiven a sequential array that contains at most 100 integers, find and log all of the integers between 0 and 100 that aren't in the array.  \n\nNow that we have our challenge, wee need outline the basic components of our algorithm. For the purposes of this example, we need an algorithm that takes an array and a key value and returns the index of the key value if it is present in the array. If the key value is not found, the function will return -1.  \n\n```\nfunction binarySearch(arr, key) {\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nThis is the base of our algorithm. However, this code won't work. We need to define our starting and stoping indices as well as the current index value based on the current value of those variables.  \n\n```\nfunction binarySearch(arr, key) {\n  var startIndex = 0;\n  var stopIndex = arr.length - 1;\n  var index = (startIndex + stopIndex) >> 1;\n\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nOur starting index will be set to 0. The stopping index will be dependent on the length of the array that we're evaluating. Our index value will then be calculated by adding our starting and stopping indices together and performing a bitwise operation to find the middle index of our array. We'll use this to perform our calculations.  \n\nNow we need to write a conditional statement that executes the increment/decrement operation on our indices while the key value is not equal to the current index value and the starting index is not equal to the stopping index. At every step of our algorithm's execution, the current index value is evaluated, which determines what our algorithm does next.  \n\n```\n...\nwhile(arr[index] !== key && startIndex < stopIndex) {\n  \n  if (key < arr[index]) {\n    stopIndex = index - 1;\n  } else if (key > arr[index]) {\n    startIndex = index + 1;\n  }\n\n  index = (startIndex + stopIndex) >> 1;\n}\n...\n```  \n\nThe finished algorithm:  \n\n```\nfunction binarySearch(arr, key) {\n  var startIndex = 0;\n  var stopIndex = arr.length - 1;\n  var index = (startIndex + stopIndex) >> 1;\n\n  while(arr[index] !== key && startIndex < stopIndex) {\n  \n    if (key < arr[index]) {\n      stopIndex = index - 1;\n    } else if (key > arr[index]) {\n      startIndex = index + 1;\n    }\n\n    index = (startIndex + stopIndex) >> 1;\n  }\n\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nOur final conditional statement checks to see if the value was found, and if so, returns the index of the key value. If the value is not found, the function return -1.  \n\nNow that we have our algorithm, let's return to our problem statement. We now need to perform a binary search on an array containing 100 random integers. Let's build a function that takes an empty array and populates it with 100 random values and then sorts the result to group together any duplicate values.  \n\n```\nvar myArr = [];\n\nfunction populateArray() {\n  // Generate a random integer between two values\n  function generateRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  // Populate the array\n  for (var i = 0; i <= 100; i++) {\n    myArr.push(generateRandomInteger(0,100));\n  }\n\n  // Sort the array\n  myArr.sort(function(a, b) {\n    return a - b;\n  });\n}\n```  \n\nBy running the populateArray function and logging the result, we'll be left with something like this:  \n\n```\nconsole.log(myArr); // [1, 3, 4, 5, 8, 8, 8, 9, 9, 10, 10, 10, 12, 12, 13, 15, 15, 17, 17, 17, 17, 18, 20, 20, 23, 24, 25, 30, 30, 31, 32, 34, 36, 36, 37, 37, 38, 38, 38, 40, 40, 40, 41, 44, 44, 45, 46, 48, 49, 51, 52, 54, 55, 56, 56, 56, 58, 58, 59, 60, 62, 62, 64, 65, 66, 66, 66, 68, 70, 70, 71, 73, 73, 74, 75, 75, 77, 79, 82, 82, 84, 86, 86, 86, 87, 90, 90, 91, 92, 94, 94, 94, 95, 96, 97, 97, 97, 97, 98, 99, 99];\n```  \n\nSo now that we have our array, let's run our binarySearch function.  \n\n```\nbinarySearch(myArr, 5); // => 3\nbinarySearch(myArr, 10); // => 11\n```\n\nNotice that if our array contains duplicate integers, the index value returned by the binarySearch function will be the index of the last occurrence of that integer. Now we've got one final step to answering our question. We need to run the binary search over the entire array and log all of the numbers in our range that don't appear in our array. This can be done pretty simply by including the log inside of our return conditional in the binarySearch function and writing a test function that iterates the function 100 times.  \n\n```\n...\nif (arr[index] == key) {\n    return index;\n  } else {\n    console.log(key + ' not found!');\n    return -1;\n  }\n...\n```  \n\n```\nfunction test() {\n  for (var i = 0; i <= 100; i++) {\n    binarySearch(myArr, i);\n  }\n}\n```  \n\nRunning the test function will give output the following to the console:  \n\n```\n0 not found!\n2 not found!\n6 not found!\n7 not found!\n...\n```  \n\nThat's it! The algorithm and test function satisfy all of the requirements of our prompt.  \n\n### Conclusion  \n\nSearching arrays with a binary search function is an extremely efficient way to do so, because the maximum number of comparisons is limited by the conditions of our algorithm to O(log(n)). This is in contrast to a more traditional linear search method of indexOf which is has an efficiency of O(n). After averaging 100 test cases, the average execution time of our binary search function was a mere 0.0501 milliseconds in Chrome.  \n\nIf you'd like to see my code, you can view it on Github.  ",
    "date": "2016-09-29 12:00",
    "preview": "Over the past few weeks, I've been reading through and studying the …",
    "title": "Writing a Binary Search Algorithm In JavaScript",
    // "author": "Tyler Reckart",
    id: 0,
    public: true,
};

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

console.log(db);