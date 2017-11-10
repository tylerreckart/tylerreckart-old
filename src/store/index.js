import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import Raven from 'raven-js';
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router';

// import post from '../reducers/posts';

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
  '/admin': {
    title: 'Admin'
  },
  '/portfolio': {
    title: 'Tyler Reckart: Portfolio'
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
//   post: {
//     posts: [],
//     isFetching: true,
//   }
};

const composedMiddleware = [
  applyMiddleware(thunk, middleware)
];

const store = createStore(
  combineReducers({ router: reducer }),
  initialState,
  compose(enhancer, ...composedMiddleware)
);

persistStore(store);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

export default store;
