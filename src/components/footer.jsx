import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({
  container: {
    fontSize: '12px',
    lineHeight: '2em',
    padding: '4em 0 4em 0',
    textAlign: 'center',
  },
  hyperlink: {
    color: '#1B95E0',
    textDecoration: 'none',
  }
});

const Footer = () => (
  <div className={css(Styles.container)}>
    <p>Subscribe to the <a className={css(Styles.hyperlink)} href="#">RSS Feed</a>, or the alternate <a className={css(Styles.hyperlink)} href="#">Atom Feed</a>.</p>
    <p>Follow <a className={css(Styles.hyperlink)} href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a> on Twitter, if you'd like.</p>
    <p>Copyright (c) 2010-2017 Tyler Reckart. All rights reserved.</p>
  </div>
);

export default Footer;