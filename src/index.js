/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase';
import Blog from './containers';
import store from './store';
import config from './utils/config';

initializeApp(config);

ReactDOM.render(
  React.createElement(Provider, { store: store }, React.createElement(Blog, {}, null)),
  document.getElementById('root')
);
