import { createStore, applyMiddleware } from 'redux';
import Raven from 'raven-js';
import AppReducer from '../reducers';

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

const store = createStore(AppReducer, applyMiddleware(logger, crashReporter));

// import { getPosts } from '../actions/posts';
// store.dispatch(getPosts());

export default store;
