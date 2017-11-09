import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #222232;
  margin: 0 0 2em 0;
  padding: 1em 0;

  @media (max-width: 700px) {
    padding: 1em;
  }
`;

const Rect = styled.div`
  color: #ffffff;
  line-height: 1.75em;
  margin: 0 auto;
  width: 650px;

  a {
    color: #ABCDFD;

    &:hover {
      border-bottom: 1px dotted #ABCDFD;
    }
  }

  p {
    margin: 0 0 1em 0;
    max-width: 325px;
  }

  strong {
    font-weight: 600;
  }
`;

const Navigation = styled.ul`
  margin: 0;
  overflow: auto;
  padding: 0;

  li {
    list-style: none;
    float: left;
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Header = props => {
  const dispatchRoute = (payload) => {
    const {
      dispatch,
      toggleMenu
    } = props;

    dispatch({ type: 'ROUTER_PUSH', payload: payload });
  };
  
  return (
    <Wrapper>
      <Rect>
        <p>I'm <strong>Tyler Reckart</strong>; a <a href="https://github.com/tylerreckart" target="_blank">Software Engineer</a> at <a href="https://boomtownroi.com" target="_blank">BoomTown</a> focusing on front end architecture and design.</p>

        <nav>
          <Navigation>
            <li><a href="javascript:void(0)" onClick={() => dispatchRoute('/')}>Journal</a></li>
            <li><a href="javascript:void(0)" onClick={() => dispatchRoute('/about')}>About</a></li>
            <li><a href="https://github.com/tylerreckart" target="_blank">Github</a></li>
            <li><a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a></li>
          </Navigation>
        </nav>
      </Rect>
    </Wrapper>
  );
};

export default Header;
