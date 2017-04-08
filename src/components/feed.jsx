import React, { PropTypes } from 'react';
import PostSlug from './slug';

const Feed = (props) => {
  const { posts } = props;

  if (posts.length > 0) {
    return (
      <div>
        {posts.map(post => (
          <PostSlug
            key={post.id}
            datePublished={post.date_published}
            content={post.content}
            title={post.title}
            url={post.url}
          />
        ))}
      </div>
    );
  }

  return <div />;
};

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Feed;
