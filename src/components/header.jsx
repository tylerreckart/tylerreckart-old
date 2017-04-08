import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

const Header = (props) => {
  const {
    title,
  } = props;

  const Styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      margin: '3em 0 3em 0',
    },
    hyperlink: {
      float: 'left',
      margin: '0 0 0 1.5em',
    },
    siteName: {
      color: 'red',
    },
  });

  return (
    <div className={css(Styles.header)}>
      <h1 className={css(Styles.siteName)}>
        <a href="/journal">{title}</a>
      </h1>

      <nav>
        <ul>
          <li className={css(Styles.hyperlink)}>
            <a href="/journal">/journal</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a href="/about">/about</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect()(Header);
