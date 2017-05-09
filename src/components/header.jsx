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
      margin: '4em auto',
      maxWidth: '650px',
    },
    hyperlink: {
      color: '#74808E',
      fontWeight: '300',
      listStyle: 'none',
      float: 'left',
      margin: '0 0 0 2em',
    },
    activeLink: {
      color: '#000000',
      fontWeight: '600',
    },
    siteName: {
      fontSize: '12px',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: '600',
    },
  });

  return (
    <div className={css(Styles.header)}>
      <h1>
        <a className={css(Styles.siteName)} href="/">{title}</a>
      </h1>

      <nav>
        <ul>
          <li className={css(Styles.hyperlink , Styles.activeLink)}>
            <a className={css(Styles.anchor)} href="/">Journal</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="/about">About</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="https://twitter.com/tylerreckart" target="_blank">Twitter</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="https://github.com/tylerreckart" target="_blank">Github</a>
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
