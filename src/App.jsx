import React, { Component, PropTypes } from 'react';
import { Fragment } from 'redux-little-router';
import styled from 'styled-components';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
// import Portfolio from './pages/portfolio';
// Templates
import PostTemplate from './templates/post';

// Apollo
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Body = styled.div`
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment forRoute="/">
          <Body>
            <Fragment forRoute="/"><Home /></Fragment>
            <Fragment forRoute='/about'><About /></Fragment>
            {/* <Fragment forRoute='/portfolio'><Portfolio /></Fragment> */}
            <Fragment forRoute='/journal/:post'><PostTemplate /></Fragment>
            <Fragment forRoute="/admin">
              <Login />
            </Fragment>

            <Fragment forNoMatch>
              <h1>Not found!</h1>
              <p>It looks like the page you're looking for doesn't exist.</p>
            </Fragment>
          </Body>
        </Fragment>
      </ApolloProvider>
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
