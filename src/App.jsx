import React, { Component, PropTypes } from 'react';
import { getPosts } from './actions';
import { Fragment } from 'redux-little-router';
import styled from 'styled-components';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createApolloFetch } from 'apollo-fetch';

// Components
import Header from './components/header';
import Footer from './components/footer';
// Pages
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
// Templates
import PostTemplate from './templates/post';

import { extended } from './utils/componentUtils';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
  }),
  queryTransformer: addTypename,
});

const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 14px;
  margin: 0 auto;
`;

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Body>
          <Header {...this.props} />
          <Fragment
            withConditions={() => this.props.router.route === '/'}
            forRoute="/"
          >
            <Home />
          </Fragment>
          <Fragment forRoute='/about'><About /></Fragment>
          <Fragment forRoute='/portfolio'><Portfolio /></Fragment>
          <Fragment forRoute='/journal/:post'><PostTemplate /></Fragment>
          <Footer />
        </Body>
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
