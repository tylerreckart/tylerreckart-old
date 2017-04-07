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
    default:
      return state;
  }
};

export default posts;
