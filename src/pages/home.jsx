import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Feed from '../components/feed';
import Pagination from '../components/pagination';

const Rect = styled.div`
  display: block;
  @media (max-width: 700px) {
    display: block;
    padding: 0 1.5em;
  }
`;

const Home = (props) => {
  let posts = [];
  if (props.data.allPosts) {
    posts = props.data.allPosts.nodes;
  }

  const node = (
    <Rect>
      <Feed posts={posts} />
      <Pagination />
    </Rect>
  );

  return posts.length > 0 ? node : null;  
};

// This is where you retrieve data from the redux store
// const mapStateToProps = (state, { params }) => ({});

// Bind dispatch actions that are used to request data from the
// backend. This gets called in `componentDidMount()`
// const mapDispatchToProps = (dispatch) => {};

Home.defaultProps = {
  posts: [],
};

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.numberd,
    created: PropTypes.number,
    public: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })),
};

export default graphql(gql`
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
`)(Home);
