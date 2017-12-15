 import * as firebase from 'firebase';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHSSLsaBy2GwPvuXC-SdYVPmb5dJ8dUXs",
    authDomain: "reactnativetestapp-527d7.firebaseapp.com",
    databaseURL: "https://reactnativetestapp-527d7.firebaseio.com",
    projectId: "reactnativetestapp-527d7",
    storageBucket: "reactnativetestapp-527d7.appspot.com",
    messagingSenderId: "340575937131"
  };
  export const firebaseApp = firebase.initializeApp(config);
