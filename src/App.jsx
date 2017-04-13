import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getPosts } from './actions';

import Home from './pages/home';
import Journal from './pages/journal';

export default class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    dispatch(getPosts());
  }

  render() {
    return (
      <Journal post={this.props.posts[0]} />
    );
  }
}

App.defaultProps = {
  posts: [],
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date_published: PropTypes.number.isRequired,
    public: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
};
