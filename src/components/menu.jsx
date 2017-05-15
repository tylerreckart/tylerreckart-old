import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

const Menu = (props) => (
  <div>
    <div className={css(Styles.menu, props.isMenuActive === true ? Styles.menuActive : Styles.menuHidden)} />
    <div className={css(Styles.overlay, props.isMenuActive === true ? Styles.overlayActive : Styles.overlayHidden)} />
  </div>
);

const Styles = StyleSheet.create({
    menu: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 20px rgba(0,0,0,.1)',
      display: 'block',
      height: '100%',
      position: 'fixed',
      top: 0,
      transition: 'all 400ms ease',
      width: '300px',
      zIndex: 10,
    },
    menuActive: {
      opacity: 1,
      right: 0,
    },
    menuHidden: {
      opacity: 0,
      right: '-300px',
    },
    overlay: {
      backgroundColor: '#000000',
      height: '100%',
      left: 0,
      position: 'fixed',
      top: 0,
      transition: 'opacity 400ms ease',
      width: '100%',
      zIndex: 9,
      overflow: 'hidden',
    },
    overlayActive: {
      opacity: .2,
    },
    overlayHidden: {
      opacity: 0,
    },
});

export default Menu;