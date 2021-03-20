import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyDBkHd3rUW8dZ5D07SUpNkPG7yMxRuWbdM",
  authDomain: "panier-achat-lt.firebaseapp.com",
  databaseURL: "https://panier-achat-lt-default-rtdb.firebaseio.com",
  projectId: "panier-achat-lt",
  storageBucket: "panier-achat-lt.appspot.com",
  messagingSenderId: "531000313975",
  appId: "1:531000313975:web:21d1dea3f4812724791e72",
  measurementId: "G-Z67T2LSR7H"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
