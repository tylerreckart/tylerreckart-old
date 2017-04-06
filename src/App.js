import React, { Component } from 'react';
import firebase, { initializeApp } from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

initializeApp(config);
// console.log(firebase.app().name);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello, world</h1>
      </div>
    );
  }
}

export default App;
