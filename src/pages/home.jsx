import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import Header from '../components/header';
import Feed from '../components/feed';
import Pagination from '../components/pagination';
import Footer from '../components/footer';

const Styles = StyleSheet.create({
  container: {
    fontFamily: '-apple-system , BlinkMacSystemFont, "Segoe UI" ,Roboto, "Helvetica Neue" ,Helvetica, sans-serif',
    fontSize: '14px',
    margin: '0 auto',
  },
});

const Home = (props) => {
  const posts = props.posts !== undefined ? props.posts : [];

  return (
    <div className={css(Styles.container)}>
      <Header title="tyler reckart" />
      <Feed posts={posts} />
      <Pagination />
      <Footer />
    </div>
  );
};

Home.defaultProps = {
  posts: [],
};

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date_published: PropTypes.number.isRequired,
    public: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
};

export default Home;
