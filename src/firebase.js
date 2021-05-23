import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDUwaDaF82_kMpXH70Vr-W_wJQX9ecLDww",
    authDomain: "twitter-clone-11.firebaseapp.com",
    projectId: "twitter-clone-11",
    storageBucket: "twitter-clone-11.appspot.com",
    messagingSenderId: "201573643571",
    appId: "1:201573643571:web:91492b7ea8f2cf0c41ba46",
    measurementId: "G-673JHYBLFJ"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage}