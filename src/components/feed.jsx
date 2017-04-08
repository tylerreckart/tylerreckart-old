import React, { PropTypes } from 'react';
import PostSlug from './slug';

const Feed = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map(post => (
        post !== null ?
          <PostSlug
            datePublished={post.date_published}
            summary={post.summary}
            title={post.title}
            url={post.url}
          />
        : <div />
      ))}
    </div>
  );
};

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Feed;
