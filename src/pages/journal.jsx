import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import Header from '../components/header';
import Post from '../components/post';
import Footer from '../components/footer';

const Styles = StyleSheet.create({
  container: {
    fontFamily: 'Menlo, monospace',
    fontSize: '14px',
    margin: '0 auto',
    maxWidth: '700px',
  },
});

const Journal = (props) => {
  return (
    <div className={css(Styles.container)}>
      <Header title="tyler reckart" />
        <Post
          key={props.post.id}
          datePublished={props.post.date_published}
          content={props.post.content}
          summary={false}
          title={props.post.title}
          url={props.post.url}
        />
      <Footer />
    </div>
  );
};

Journal.defaultProps = {
  posts: [],
};

Journal.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    date_published: PropTypes.number,
    public: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })),
};

export default Journal;
