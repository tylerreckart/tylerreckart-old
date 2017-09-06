import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({
  container: {
    color: '#74808E',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    lineHeight: '2em',
    fontWeight: '300',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    '@media (max-width: 700px)': {
      display: 'block',
      padding: '0 1.5em',
    }
  },
  hyperlink: {
    display: 'block',
    margin: '1.5em',
    // margin: '0 auto',
  }
});

const Footer = () => (
  <div className={css(Styles.container)}>
    <span className={css(Styles.hyperlink)}>&copy; 2010-2017 Tyler Reckart</span>
  </div>
);

export default Footer;