import React, { Component, PropTypes } from 'react';
import { Fragment } from 'redux-little-router';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
// Templates
import PostTemplate from './templates/post';

// Apollo
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface(process.env.REACT_APP_API_URL),
  queryTransformer: addTypename,
});

const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin: 0 auto;
`;

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment forRoute="/">
          <Body>
            <Header {...this.props} />

            <Fragment forRoute="/"><Home /></Fragment>
            <Fragment forRoute='/about'><About /></Fragment>
            {/* <Fragment forRoute='/portfolio'><Portfolio /></Fragment> */}
            <Fragment forRoute='/journal/:post'><PostTemplate /></Fragment>
            <Fragment forNoMatch>
              <h1>Not found!</h1>
              <p>It looks like the page you're looking for doesn't exist.</p>
            </Fragment>
            <Footer />
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
