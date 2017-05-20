import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import Raven from 'raven-js';
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router';

import post from '../reducers/posts';

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const crashReporter = store => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};

const routes = {
  '/': {
    title: 'Tyler Reckart'
  },
  '/about': {
    title: 'Tyler Reckart: About'
  },
  '/journal': {
    title: 'Tyler Reckart: Journal',
    '/:post': {
      title: ''
    }
  },
};

const {
  reducer,
  middleware,
  enhancer,
} = routerForBrowser({
  // The configrued routes. **Required**
  routes,
});

const initialState = {
  post: {
    posts: [],
    isFetching: true,
  }
};

const store = createStore(
  combineReducers({ router: reducer, post}),
  initialState,
  // compose(enhancer, applyMiddleware(thunk)),
  compose(enhancer, applyMiddleware(thunk, logger, crashReporter)),
  autoRehydrate()
);

persistStore(store);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

export default store;
