import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({
  container: {
    color: '74808E',
    borderTop: '4px solid #f7f8f9',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    lineHeight: '2em',
    fontWeight: '300',
    margin: '0 auto',
    width: '650px',
    marginBottom: '2em',
    paddingTop: '1.5em',
    '@media (max-width: 700px)': {
      display: 'block',
      margin: '0 1em 2em 1em',
    }
  },
});

const Footer = () => (
  <div className={css(Styles.container)}>
    <span className={css(Styles.hyperlink)}>&copy; 2010-2017 Tyler Reckart. All Rights Reserved</span>
  </div>
);

export default Footer;