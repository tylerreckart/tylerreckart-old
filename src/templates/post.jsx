import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Single from '../components/Single';
import Post from '../components/Post';

const Rect = styled.div`
  margin: 0 auto;
  width: 650px;
  margin-top: 80px;
`;

const PostTemplate = (props) => {
  const post = props.data.postById;

  if (post) {
    return (
      <Rect>
        <Post
          datePublished={post.created}
          content={post.content}
          created={post.created}
          summary={false}
          title={post.title}
          url={post.url}
         />
      </Rect>
    );
  }

  return null;
};

export default graphql(gql`
  query {
    postById(id: 0) {
      title
      created
      content
    }
  }
`)(PostTemplate);
