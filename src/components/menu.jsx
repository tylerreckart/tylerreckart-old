import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false,
    };
  }

  toggleMenu() {
    if (this.state.isMenuActive === false) {
      this.setState({
        isMenuActive: true,
      });
    } else if (this.state.isMenuActive === true) {
      this.setState({
        isMenuActive: false,
      });
    }

    return;
  }

  render() {
    const isMenuActive = this.state.isMenuActive;
    return (
      <div>
        <div className={css(Styles.menu, isMenuActive === true ? Styles.menuActive : Styles.menuHidden)} />
        <div className={css(Styles.overlay, isMenuActive === true ? Styles.overlayActive : Styles.overlayHidden)} />
      </div>
    );
  }
}

const Styles = StyleSheet.create({
    menu: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 20px rgba(0,0,0,.1)',
      display: 'block',
      height: '100%',
      position: 'fixed',
      top: 0,
      transition: 'all 300ms ease',
      width: '400px',
      zIndex: 10,
    },
    menuActive: {
      opacity: 1,
      right: 0,
    },
    menuHidden: {
      opacity: 0,
      right: '-400px',
    },
    overlay: {
      backgroundColor: '#000000',
      height: '100%',
      left: 0,
      position: 'fixed',
      top: 0,
      transition: 'opacity 300ms ease',
      width: '100%',
      zIndex: 9,
    },
    overlayActive: {
      opacity: .2,
    },
    overlayHidden: {
      opacity: 0,
    },
});