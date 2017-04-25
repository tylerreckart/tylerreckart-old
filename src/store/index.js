import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
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

const initialState = {
  post: {
    posts: [],
    isFetching: true,
  }
};

const store = createStore(
  AppReducer,
  initialState,
  // compose(applyMiddleware(thunk)),
  compose(applyMiddleware(thunk, logger, crashReporter)),
  autoRehydrate()
);

persistStore(store);

export default store;
