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
    margin: '0 auto',
    width: '650px',
    '@media (max-width: 700px)': {
      display: 'block',
      padding: '0 1em 2em 1em',
    }
  },
});

const Footer = () => (
  <div className={css(Styles.container)}>
    <span className={css(Styles.hyperlink)}>&copy; 2010-2017 Tyler Reckart</span>
  </div>
);

export default Footer;