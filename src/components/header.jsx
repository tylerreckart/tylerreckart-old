import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

const Header = (props) => {
  const {
    title,
  } = props;

  const Styles = StyleSheet.create({
    anchor: {
      color: 'inherit',
      textDecoration: 'none',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      fontSize: '12px',
      justifyContent: 'space-between',
      margin: '4em 0 4em 0',
    },
    hyperlink: {
      float: 'left',
      margin: '0 0 0 2em',
    },
    siteName: {
      color: 'inherit',
      textDecoration: 'none',
    },
  });

  return (
    <div className={css(Styles.header)}>
      <h1>
        <a className={css(Styles.siteName)} href="/journal">{title}</a>
      </h1>

      <nav>
        <ul>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="/journal">/journal</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="/about">/about</a>
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
