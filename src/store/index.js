import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { routerForBrowser } from 'redux-little-router';
import thunk from 'redux-thunk';
// import Raven from 'raven-js';
import AppReducer from '../reducers';

const routes = {
  '/about': {
    title: 'About',
  },
  '/journal/:id': {
    title: 'Journal',
  },
};

const {
  reducer,
  middleware,
  enhancer,
} = routerForBrowser({
  routes,
});


// const logger = store => next => (action) => {
//   console.log('dispatching', action);
//   const result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };

// const crashReporter = store => next => (action) => {
//   try {
//     return next(action);
//   } catch (err) {
//     console.error('Caught an exception!', err);
//     Raven.captureException(err, {
//       extra: {
//         action,
//         state: store.getState(),
//       },
//     });
//     throw err;
//   }
// };

const store = createStore(
  combineReducers({ router: reducer, AppReducer }),
  // compose(enhancer, applyMiddleware(middleware, thunk, logger, crashReporter)),
  compose(enhancer, applyMiddleware(middleware, thunk)),
  autoRehydrate(),
);

persistStore(store);

export default store;
