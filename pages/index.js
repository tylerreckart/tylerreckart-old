import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

// Components
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Feed from '../src/components/Feed';
import Pagination from '../src/components/Pagination';

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

const QUERY = gql`
  query {
    allPosts(orderBy: ID_ASC) {
      nodes {
        title
        created
        content
        url
      }
    }
  }
`;

const Rect = styled.div`
  display: block;
  @media (max-width: 700px) {
    display: block;
    padding: 0 1em;
  }
`;

const Home = (props) => {
  let posts = [];
  if (props.data.allPosts) {
    posts = props.data.allPosts.nodes;
  }

  const node = (
    <Rect>
      <Feed {...props} posts={posts} />
    </Rect>
  );

  return (
    <ApolloProvider client={client}>
      <Header {...props} />
      {posts.length > 0 ? node : null}
      <Footer />
    </ApolloProvider>
  );  
};

// Home.defaultProps = {
//   posts: [],
// };

// Home.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.numberd,
//     created: PropTypes.number,
//     public: PropTypes.bool,
//     title: PropTypes.string,
//     content: PropTypes.string,
//     url: PropTypes.string
//   })),
// };

export default graphql(QUERY)(Home);
