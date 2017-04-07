import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase';
// import firebase, { initializeApp } from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './reducers';
import App from './App';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

initializeApp(config);

// firebase.database().ref('/posts/1').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// });

let store = createStore(AppReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
