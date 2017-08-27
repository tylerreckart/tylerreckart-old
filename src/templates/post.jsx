import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Single from '../components/single';
import Post from '../components/post';

const Rect = styled.div`
  margin: 0 auto;
  width: 650px;
  margin-top: 120px;
`;

const PostTemplate = (props) => {
  const post = props.data.post;

  return (
    <Rect>
      {
        props.data.post ?
          <Post
            datePublished={post.created}
            content={post.content}
            created={post.created}
            summary={false}
            title={post.title}
            url={post.url}
          />
        : null
      }
    </Rect>
  );
};
export default graphql(gql`
  query {
    post(url: "journal/writing-a-binary-search-algorithm-in-javascript") {
      title
      created
      content
    }
  }
`)(PostTemplate);
