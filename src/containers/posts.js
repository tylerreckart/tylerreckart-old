import { connect } from 'react-redux';
import App from '../App';

const displayPosts = (posts) => {
  return {
    posts,
  };
};

const mapStateToProps = (state) => {
  return {
    posts: displayPosts(state.posts),
  };
};

const PostsList = connect(mapStateToProps)(App);

export default PostsList;
