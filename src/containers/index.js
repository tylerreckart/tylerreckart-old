import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => {
  return {
    router: state.router,
  };
};

const Blog = connect(mapStateToProps)(App);

export default Blog;
