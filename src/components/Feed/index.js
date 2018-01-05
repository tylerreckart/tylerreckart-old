import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Post from '../Post';

const Rect = styled.div`
  margin: 0 auto;
  max-width: 650px;
`;

const Feed = (props) => {
  const {
    dispatch,
    posts
  } = props;

  if (posts) {
    return (
      <Rect>
        {posts.map(post => (
          <Post
            key={`post-${post.id}`}
            created={post.created}
            content={post.content}
            dispatch={dispatch}
            summary={posts.length > 1}
            title={post.title}
            url={post.url}
          />
        ))}
      </Rect>
    );
  }

  return null;
};

Feed.defaultProps = {
  posts: [],
};

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    created: PropTypes.string,
    public: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })),
};

export default Feed;
