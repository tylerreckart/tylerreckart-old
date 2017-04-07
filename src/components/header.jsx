import React, { PropTypes } from 'react';

const Header = (props) => {
  const {
    title,
  } = props;

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

export default Header;
