import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

const Header = (dispatch, props) => {
  const {
    title,
  } = props;

  dispatch(getPosts());

  return (
    <div>
      <h1>
        <a href="/journal">{title}</a>
      </h1>

      <nav>
        <ul>
          <li><a href="/journal">/journal</a></li>
          <li><a href="/about">/about</a></li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect()(Header);
