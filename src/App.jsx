import React, { Component, PropTypes } from 'react';
import { getPosts } from './actions';
import Header from './components/header';
import Feed from './components/feed';

export default class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    dispatch(getPosts());
  }

  render() {
    const posts = this.props.posts !== undefined ? this.props.posts : [];

    return (
      <div>
        <Header title="tylerreckart" />
        <Feed posts={posts} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array,
};
