/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Blog from './containers';
import store from './store';
import { provideRouter } from 'redux-little-router';
// css
import './index.css';

const BlogWithRouter = provideRouter({
  store: store
})(Blog);

ReactDOM.render(
  React.createElement(Provider, { store: store }, React.createElement(BlogWithRouter, {}, null)),
  document.getElementById('root')
);
