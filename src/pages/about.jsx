import React from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Post from '../components/Post';

const Rect = styled.div`
  margin: 0 auto;
  width: 650px;
`;

const About = (props) => {
  const post = props.data.pageById;

  if (post) {
    return (
      <Rect>
        <Post
          datePublished={post.created}
          content={post.content}
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
    pageById(id: 0) {
      title
      content
    }
  }
`)(About);
