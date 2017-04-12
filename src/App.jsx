import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getPosts } from './actions';
import Header from './components/header';
import Feed from './components/feed';

const Styles = StyleSheet.create({
  container: {
    margin: '0 auto',
    maxWidth: '700px',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    dispatch(getPosts());
  }

  render() {
    const posts = this.props.posts !== undefined ? this.props.posts : [];

    return (
      <div className={css(Styles.container)}>
        <Header title="tylerreckart" />
        <Feed posts={posts} />
      </div>
    );
  }
}

App.defaultProps = {
  posts: [],
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    posts: PropTypes.array,
  })),
};
