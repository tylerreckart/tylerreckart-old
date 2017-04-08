import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => ({
  posts: state.post.posts,
});

const Blog = connect(mapStateToProps)(App);

export default Blog;
