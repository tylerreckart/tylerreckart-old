import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import PostSlug from './slug';

const Feed = (props) => {
  const { posts } = props;

  const Styles = StyleSheet.create({
    post: {
      marginBottom: '1em',
    },
    last: {
      marginBottom: 0,
    },
  });

  if (posts.length > 0) {
    return (
      <div>
        {posts.map(post => (
          <PostSlug
            key={post.id}
            className={
              css(
                posts[posts.length - 1] === post ? Styles.last : Styles.post,
              )
            }
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
