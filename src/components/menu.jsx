import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'redux-little-router';
import { extended } from '../utils/componentUtils';
import { push } from 'redux-little-router';

const Menu = (props) => {
  const dispatchRoute = (payload) => {
    const {
      dispatch,
      toggleMenu
    } = props;

    dispatch({ type: 'ROUTER_PUSH', payload: payload });
    toggleMenu();
  };

  return (
    <div>
      <div className={css(Styles.menu, props.isMenuActive === true ? Styles.menuActive : Styles.menuHidden)}>
        <p className={css(Styles.description)}>Tyler Reckart is a Software Engineer at <a href="https://boomtownroi.com/" target="_blank">BoomTown</a> focusing on front end architecture and design.</p>
        <nav>
          <ul className={extended.css(Styles.globals, Styles.navMenu)}>
            <li><a href="javascript:void(0)" onClick={() => dispatchRoute('/')}>Journal</a></li>
            <li><a href="javascript:void(0)" onClick={() => dispatchRoute('/about')}>About</a></li>
            <li><a href="https://github.com/tylerreckart" target="_blank">Github</a></li>
            <li><a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a></li>
          </ul>
        </nav>
      </div>
      <div className={css(Styles.overlay, props.isMenuActive === true ? Styles.overlayActive : Styles.overlayHidden)} />
    </div>
  );
};

const Styles = StyleSheet.create({
    globals: {
      '*a': {
        color: '#74808E',
        textDecoration: 'none',
        ':hover': {
          color: '#000000',
          borderBottom: '1px solid #000000'
        },
      },
      '*li': {
        lineHeight: '2em',
        fontSize: '14px',
        fontWeight: '300',
        textAlign: 'right',
      },
    },
    bold: {
      fontWeight: 600,
    },
    description: {
      margin: '72px 20px 0 20px',
      fontSize: '14px',
      lineHeight: '1.5em',
      textAlign: 'right',
      fontWeight: 300,
    },
    menu: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 20px rgba(0,0,0,.1)',
      display: 'block',
      height: '100%',
      position: 'fixed',
      top: 0,
      transition: 'all 300ms ease-in-out',
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
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      transition: 'opacity 300ms ease-in-out',
      width: '100%',
      zIndex: 9,
    },
    overlayActive: {
      opacity: .2,
      top: 0, // See below
    },
    overlayHidden: {
      opacity: 0,
      top: '100%', // this is a weird hack to solve a zIndexing issue. This should probably be refactored later on down the road
    },
    navMenu: {
      position: 'relative',
      textAlign: 'right',
      top: '20px',
      right: '20px',
    },
});

export default Menu;