import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQhtZGTUT1Ls7PiqJpK8knkZq3rlqwOHE",
  authDomain: "clone-3745d.firebaseapp.com",
  databaseURL: "https://clone-3745d.firebaseio.com",
  projectId: "clone-3745d",
  storageBucket: "clone-3745d.appspot.com",
  messagingSenderId: "710086894346",
  appId: "1:710086894346:web:b1942bfa57e8663af890f3",
  measurementId: "G-7QVK4FNSSG"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };