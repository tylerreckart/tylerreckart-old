import React, { PropTypes } from 'react';
import { getPosts } from './actions';
import Header from './components/header';
import Feed from './components/feed';

const App = (props) => {
  const {
    dispatch,
  } = props;

  // dispatch(getPosts());

  return (
    <div>
      <Header title="tylerreckart" />
      <Feed />
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default App;
