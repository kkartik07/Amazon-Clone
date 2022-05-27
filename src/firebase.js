import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeYG7zqvokRDfRdKz5oV7H8ET4muKot0A",
  authDomain: "snapkartnew.firebaseapp.com",
  projectId: "snapkartnew",
  storageBucket: "snapkartnew.appspot.com",
  messagingSenderId: "965584957602",
  appId: "1:965584957602:web:ccc9cb7110c75dc7fd27fb",
  measurementId: "G-X9N4VQNKN9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };