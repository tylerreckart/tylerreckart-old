import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    lineHeight: '2em',
    textAlign: 'center',
    maxWidth: '650px',
    margin: '4em auto',
    fontWeight: '300',
  },
  hyperlink: {
    color: '#414EF9',
    textDecoration: 'none',
  }
});

const Footer = () => (
  <div className={css(Styles.container)}>
    <span>Copyright &copy; 2010-2017 Tyler Reckart. All rights reserved.</span>
    {/*<span>Follow <a className={css(Styles.hyperlink)} href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a> on Twitter, if you'd like.</span>*/}
  </div>
);

export default Footer;