import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4em 0 0 0'
  },
  inactive: {
    color: '#777777',
    textDecoration: 'none',
  }
});

const Pagination = () => (
  <div className={css(Styles.container)}>
    <div><a className={css(Styles.inactive)} href="#">Older</a></div>
    <div><span>1 of 1</span></div>
    <div><a className={css(Styles.inactive)} href="#">Newer</a></div>
  </div>
);

export default Pagination;