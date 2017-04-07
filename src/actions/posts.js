import * as firebase from 'firebase';

export const recievePosts = posts => ({
  type: 'RECIEVE_POSTS',
  posts,
});

export const getPosts = () => (
  (dispatch) => {
    firebase.database().ref('/posts/').once('value')
    .then(snapshot => dispatch(recievePosts(JSON.parse(snapshot.val()))))
    .done();
  }
);
