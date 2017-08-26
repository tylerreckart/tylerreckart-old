import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'redux-little-router';
import styled from 'styled-components';

import Menu from './menu';
import Trigger from './trigger';

class Header extends Component {
    constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false,
      isTooltipActive: false,
    };
  }

   toggleTooltip() {
     const { isTooltipActive } = this.state;

     if (isTooltipActive) {
       this.setState({
         isTooltipActive: false,
       });
     } else {
       this.setState({
         isTooltipActive: true,
       });
     }
   }

  render() {
    const {
      title,
    } = this.props;

    const isMenuActive = this.state.isMenuActive;

    return (
      <div>
        <div className={css(Styles.header)}>
          <div className={css(Styles.itemWrapper, Styles.menuItemWrapper)}>
            <Trigger 
              isMenuActive={isMenuActive}
              toggleMenu={() => this.toggleMenu()} 
            />
          </div>

          <Menu
            {...this.props}
            isMenuActive={isMenuActive}
            toggleMenu={() => this.toggleMenu()}
          />

          <div className={css(Styles.itemWrapper)}>
            <Link href="/">
              <div className={css(Styles.profileImg)} />
            </Link>
            {this.state.isMenuActive ? <Tooltip /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const Styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: '100',
    },
    profileImg: {
      background: `url('https://pbs.twimg.com/profile_images/900381304751042560/fX56nnNC_400x400.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '50%',
      cursor: 'pointer',
      height: '32px',
      width: '32px',
    },
    itemWrapper: {
      padding: '1.5em',
      position: 'relative',
      zIndex: 0,
    },
    menuItemWrapper: {
      zIndex: 100,
    },
  });

export default connect()(Header);
