import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';
// import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Header from '../components/Header';
import withData from '../lib/apollo';

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

export default withData(props => {
  let posts = [];
  if (props.data && props.data.allPosts) {
    posts = props.data.allPosts.nodes;
  }

  // const node = (
  //   <Rect>
  //     <Feed {...props} posts={posts} />
  //   </Rect>
  // );

  return (
    <Rect>
      <Header {...props} />
      {/* {posts.length > 0 ? node : null} */}
      <Footer />
    </Rect>
  );  
});

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
