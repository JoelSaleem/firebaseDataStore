import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';
import { Text, View } from 'react-native';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyCnZHkGWJVcxETUkhGGrBcMAck67XzMgkM",
    authDomain: "secondgo-7f011.firebaseapp.com",
    databaseURL: "https://secondgo-7f011.firebaseio.com",
    projectId: "secondgo-7f011",
    storageBucket: "secondgo-7f011.appspot.com",
    messagingSenderId: "690798188793"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

export default App;
