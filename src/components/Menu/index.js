import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { extended } from '../../utils/componentUtils';
import { push } from 'redux-little-router';
import styled from 'styled-components';

const Description = styled.p`
  margin: 72px 20px 0 20px;
  text-align: right;
`;

const Link = styled.a`
  color: #74808E;
  display: inline-block;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 1.00);
  }
`;

const Navigation = styled.ul`
  text-align: right;
  position: relative;
  right: 20px;
  top: 20px;

  li {
    line-height: 1.6em;
  }
`;

const Overlay = styled.div`
  background-color: #000000;
  height: 100%;
  left: 0;
  overflow: hidden;
  opacity: 0.2;
  position: fixed;
  top: 0;
  transition: all 300ms ease-in-out;
  width: 100%;
  z-index: 1;
`;

const Rect = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  display: block;
  height: 100%;
  line-height: 1.6em;
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  z-index: 2;
`;

const Menu = (props) => {
  const dispatchRoute = (payload) => {
    const {
      dispatch,
      toggleMenu
    } = props;

    dispatch({ type: 'ROUTER_PUSH', payload: payload });
    toggleMenu();
  };

  if (props.isMenuActive) {
    return (
      <div>
        <Rect>
          <Description>
            Tyler Reckart is a Software Engineer at <Link href="https://boomtownroi.com/" target="_blank">BoomTown</Link> focusing on front end architecture and design.
          </Description>

          <nav>
            <Navigation>
              <li><Link href="javascript:void(0)" onClick={() => dispatchRoute('/')}>Journal</Link></li>
              <li><Link href="javascript:void(0)" onClick={() => dispatchRoute('/about')}>About</Link></li>
              <li><Link href="https://github.com/tylerreckart" target="_blank">Github</Link></li>
              <li><Link href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</Link></li>
            </Navigation>
          </nav>
        </Rect>

        {props.isMenuActive ? <Overlay /> : null}
      </div>
    );
  }
  
  return null;
};

export default Menu;