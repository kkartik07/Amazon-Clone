import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsnxyftzGcjBOFZC3uIrVC-TRvne3pyS0",
  authDomain: "snapkart-4b965.firebaseapp.com",
  projectId: "snapkart-4b965",
  storageBucket: "snapkart-4b965.appspot.com",
  messagingSenderId: "232777010200",
  appId: "1:232777010200:web:ed92d4cf7f3f68b25c076d",
  measurementId: "G-R4EXWJEPQW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };