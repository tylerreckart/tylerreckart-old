import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Post from './post';

const Feed = (props) => {
  const { posts } = props;

  const Styles = StyleSheet.create({
    container: {
      marginTop: '75px',
    },
    feed: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '800px',
      margin: '0 auto',
    },
    post: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '900px',
    },
    leading: {
      marginBottom: '4em',
    },
    terminal: {
      marginBottom: 0,
    },
  });

  if (posts.length > 0) {
    return (
      <div className={css(Styles.container)}>
        <div className={css(Styles.feed)}>
          {posts.map(post => (
            <Post
              key={post.id}
              className={
                css(
                  posts[posts.length - 1] === post ? Styles.terminal : Styles.leading,
                  Styles.post
                )
              }
              datePublished={post.date_published}
              content={post.content}
              summary={false}
              title={post.title}
              url={post.url}
            />
          ))}
        </div>
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
