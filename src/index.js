/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Blog from './containers';
import store from './store';
// css
import './index.css';

ReactDOM.render(
  React.createElement(Provider, { store: store }, React.createElement(Blog, {}, null)),
  document.getElementById('root')
);
