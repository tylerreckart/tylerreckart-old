import React, { Component, PropTypes } from 'react';
import { getPosts } from './actions';
import { Fragment } from 'redux-little-router';
import styled from 'styled-components';
import { createApolloFetch } from 'apollo-fetch';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

import { extended } from './utils/componentUtils';

const Post = {
  content: "Over the past few weeks, I've been reading through and studying the problems in [Programming Pearls](https://www.amazon.com/Programming-Pearls-2nd-Jon-Bentley/dp/0201657880) in an effort to better understand algorithms and their design. In the book, there's an excellent example of a binary search implementation. Working through the solution really caught my interest and inspired me to work through a front end implementation of a similar algorithm in JavaScript.  \n\nOur binary search algorithm will work by evaluating a value in a set and determining if it is equal to, less than, or greater than the value you are searching for. If the key value is less than the the current index value, the stop index is set to the value of the current index minus 1. If the greater than the current index value, the start index is set to the value of the current index + 1. If the key value is equal to the current index value, the search stops.  \n\n*Let's define a problem to build our algorithm around:*  \n\n**Given a sequential array that contains at most 100 integers, find and log all of the integers between 0 and 100 that aren't in the array.**  \n\nNow that we have our challenge, wee need outline the basic components of our algorithm. For the purposes of this example, we need an algorithm that takes an array and a key value and returns the index of the key value if it is present in the array. If the key value is not found, the function will return -1.  \n\n```\nfunction binarySearch(arr, key) {\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nThis is the base of our algorithm. However, this code won't work. We need to define our starting and stoping indices as well as the current index value based on the current value of those variables.  \n\n```\nfunction binarySearch(arr, key) {\n  var startIndex = 0;\n  var stopIndex = arr.length - 1;\n  var index = (startIndex + stopIndex) >> 1;\n\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nOur starting index will be set to 0. The stopping index will be dependent on the length of the array that we're evaluating. Our index value will then be calculated by adding our starting and stopping indices together and performing a bitwise operation to find the middle index of our array. We'll use this to perform our calculations.  \n\nNow we need to write a conditional statement that executes the increment/decrement operation on our indices while the key value is not equal to the current index value and the starting index is not equal to the stopping index. At every step of our algorithm's execution, the current index value is evaluated, which determines what our algorithm does next.  \n\n```\n...\nwhile(arr[index] !== key && startIndex < stopIndex) {\n  \n  if (key < arr[index]) {\n    stopIndex = index - 1;\n  } else if (key > arr[index]) {\n    startIndex = index + 1;\n  }\n\n  index = (startIndex + stopIndex) >> 1;\n}\n...\n```  \n\nThe finished algorithm:  \n\n```\nfunction binarySearch(arr, key) {\n  var startIndex = 0;\n  var stopIndex = arr.length - 1;\n  var index = (startIndex + stopIndex) >> 1;\n\n  while(arr[index] !== key && startIndex < stopIndex) {\n  \n    if (key < arr[index]) {\n      stopIndex = index - 1;\n    } else if (key > arr[index]) {\n      startIndex = index + 1;\n    }\n\n    index = (startIndex + stopIndex) >> 1;\n  }\n\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nOur final conditional statement checks to see if the value was found, and if so, returns the index of the key value. If the value is not found, the function return -1.  \n\nNow that we have our algorithm, let's return to our problem statement. We now need to perform a binary search on an array containing 100 random integers. Let's build a function that takes an empty array and populates it with 100 random values and then sorts the result to group together any duplicate values.  \n\n```\nvar myArr = [];\n\nfunction populateArray() {\n  // Generate a random integer between two values\n  function generateRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  // Populate the array\n  for (var i = 0; i <= 100; i++) {\n    myArr.push(generateRandomInteger(0,100));\n  }\n\n  // Sort the array\n  myArr.sort(function(a, b) {\n    return a - b;\n  });\n}\n```  \n\nBy running the populateArray function and logging the result, we'll be left with something like this:  \n\n```\nconsole.log(myArr); // [1, 3, 4, 5, 8, 8, 8, 9, 9, 10, 10, 10, 12, 12, 13, 15, 15, 17, 17, 17, 17, 18, 20, 20, 23, 24, 25, 30, 30, 31, 32, 34, 36, 36, 37, 37, 38, 38, 38, 40, 40, 40, 41, 44, 44, 45, 46, 48, 49, 51, 52, 54, 55, 56, 56, 56, 58, 58, 59, 60, 62, 62, 64, 65, 66, 66, 66, 68, 70, 70, 71, 73, 73, 74, 75, 75, 77, 79, 82, 82, 84, 86, 86, 86, 87, 90, 90, 91, 92, 94, 94, 94, 95, 96, 97, 97, 97, 97, 98, 99, 99];\n```  \n\nSo now that we have our array, let's run our binarySearch function.  \n\n```\nbinarySearch(myArr, 5); // => 3\nbinarySearch(myArr, 10); // => 11\n```\n\nNotice that if our array contains duplicate integers, the index value returned by the binarySearch function will be the index of the last occurrence of that integer. Now we've got one final step to answering our question. We need to run the binary search over the entire array and log all of the numbers in our range that don't appear in our array. This can be done pretty simply by including the log inside of our return conditional in the binarySearch function and writing a test function that iterates the function 100 times.  \n\n```\n...\nif (arr[index] == key) {\n    return index;\n  } else {\n    console.log(key + ' not found!');\n    return -1;\n  }\n...\n```  \n\n```\nfunction test() {\n  for (var i = 0; i <= 100; i++) {\n    binarySearch(myArr, i);\n  }\n}\n```  \n\nRunning the test function will give output the following to the console:  \n\n```\n0 not found!\n2 not found!\n6 not found!\n7 not found!\n...\n```  \n\nThat's it! The algorithm and test function satisfy all of the requirements of our prompt.  \n\n### Conclusion  \n\nSearching arrays with a binary search function is an extremely efficient way to do so, because the maximum number of comparisons is limited by the conditions of our algorithm to `O(log(n))`. \n\nIf you'd like to see my code, you can view it on [Github](https://gist.github.com/tylerreckart/fa0433056fea20a0d11b4358c17dca8d).",
  date_published: Date.now(),
  preview: "Over the past few weeks, I've been reading through and studying the …",
  title: "Writing a Binary Search Algorithm In JavaScript",
  id: 0,
  public: true,
  url: 'fizzbuzz',
};

const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 14px;
  margin: 0 auto;
`;

export default class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    const query = `
      {
        post(url: "journal/writing-a-binary-search-algorithm-in-javascript") {
          title,
          created,
          content,
        }
      }
    `;
    const uri = 'http://localhost:4000/graphql';
    const apolloFetch = createApolloFetch({ uri });

    apolloFetch({ query })
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Body>
        <Header {...this.props} />
        <Fragment withConditions={() => this.props.router.route === '/'} forRoute="/"><Home posts={[Post]} /></Fragment>
        <Fragment forRoute='/about'><About /></Fragment>
        <Fragment forRoute='/journal/:post'><h1>Heya</h1></Fragment>
        <Footer />
      </Body>
    );
  }
}

App.defaultProps = {
  posts: [],
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date_published: PropTypes.number.isRequired,
    public: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
};
