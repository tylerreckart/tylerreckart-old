import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Post from './post';

const Feed = (props) => {
  const { posts } = props;

  const Styles = StyleSheet.create({
    post: {
      marginBottom: '4em',
    },
    last: {
      marginBottom: 0,
    },
  });

  if (posts.length > 0) {
    return (
      <div>
        {posts.map(post => (
          <Post
            key={post.id}
            className={
              css(
                posts[posts.length - 1] === post ? Styles.last : Styles.post
              )
            }
            datePublished={post.date_published}
            content={post.content}
            // summary={false}
            title={post.title}
            url={post.url}
          />
        ))}
      </div>
    );
  }

  return <div />;
};

Feed.defaultProps = {
  posts: [],
};

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date_published: PropTypes.number.isRequired,
    public: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
};

export default Feed;
