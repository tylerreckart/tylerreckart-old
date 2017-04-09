import { combineReducers } from 'redux';

import post from './posts';

const AppReducer = combineReducers({
  post,
});

export default AppReducer;
