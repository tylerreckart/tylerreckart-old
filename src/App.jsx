import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Single from './pages/single';

// Apollo
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache(),
});

const Body = styled.div`
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
`;

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Hello</h1>
        <Router>
          <Body>
            <Route exact path="/" render={() => (
              <Home {...this.props} />
            )} />
            <Route path="/about" component={About} />
            <Route path="/journal/:id" render={() => (
              <Single {...this.props} />
            )} />
            <Route component={NoMatch} />
          </Body>
        </Router>
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
