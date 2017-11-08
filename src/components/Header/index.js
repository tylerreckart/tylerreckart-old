import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'redux-little-router';
import styled from 'styled-components';

import Menu from '../Menu';
import Trigger from '../Trigger';

const Rect = styled.div`
  // background-color: white;
  // border-bottom: 1px solid #E6E8EB;
  // box-shadow: 0 0 4px rgba(0,0,0,.10);
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

class Header extends Component {
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
    const {
      title,
    } = this.props;

    const isMenuActive = this.state.isMenuActive;

    return (
      <div>
        <Rect>
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
          </div>
        </Rect>
      </div>
    );
  }
}

const Styles = StyleSheet.create({
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
