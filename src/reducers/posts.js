import { REHYDRATE } from 'redux-persist/constants';

const posts = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        posts: [],
        isFetching: true,
      };
    case 'RECIEVE_POSTS':
      return {
        posts: action.posts,
        isFetching: false,
      };
    case REHYDRATE:
      let incoming = action.payload.myReducer;
      if (incoming) return { ...state, ...incoming };
      return state;
    default:
      return state;
  }
};

export default posts;
