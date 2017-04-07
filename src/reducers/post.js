const post = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST':
      return {
        post: action.post,
      };
    default:
      return state;
  }
};

export default post;
