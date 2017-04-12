export const recievePosts = posts => ({
  type: 'RECIEVE_POSTS',
  posts,
});

export const getPosts = () => (
  (dispatch) => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/posts.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => dispatch(recievePosts(response)))
    .catch(error => console.error(error));
  }
);
