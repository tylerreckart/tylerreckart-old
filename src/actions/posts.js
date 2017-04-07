export const GET_POSTS = 'GET_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const recievePosts = (posts) => {
  return {
    type: RECIEVE_POSTS,
    posts,
  };
};
