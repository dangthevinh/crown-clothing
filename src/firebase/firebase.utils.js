//jshint esversion:6
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBKxJG7Kvlk0ZRyttk-7TU0BwCFpim2HU",
    authDomain: "crown-db-8d3f3.firebaseapp.com",
    databaseURL: "https://crown-db.firebaseio.com",
    projectId: "crown-db-8d3f3",
    storageBucket: "crown-db-8d3f3.appspot.com",
    messagingSenderId: "555549611227",
    appId: "1:555549611227:web:166ff6e8afc06645cd28fe",
    measurementId: "G-9WY934HD2E"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
