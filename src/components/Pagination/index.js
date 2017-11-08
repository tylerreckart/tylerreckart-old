import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import styled from 'styled-components';

const Rect = styled.div`
  bottom: 0;
  display: flex;
  font-size: 12px;
  font-weight: 300;
  justify-content: space-between;
  left: 50%;
  margin: 3em 0 8em 0;
  position: absolute;
  transform: translateX(-50%);
  width: 650px;
`;

const Link = styled.a`
  color: #74808E;
  pointer-events: none;
  text-decoration: none;
`;

const Pagination = () => (
  <Rect>
    <div><Link>Older</Link></div>
    <div><span>1 of 1</span></div>
    <div><Link>Newer</Link></div>
  </Rect>
);

export default Pagination;