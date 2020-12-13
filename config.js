import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7aLvFDpELmBh5REeyjpv8Bo_BtLXx0uk",
  authDomain: "black-box-76359.firebaseapp.com",
  databaseURL: "https://black-box-76359-default-rtdb.firebaseio.com",
  projectId: "black-box-76359",
  storageBucket: "black-box-76359.appspot.com",
  messagingSenderId: "473136133401",
  appId: "1:473136133401:web:8e046fff89c0f3c3030188",
  measurementId: "G-DTRFH82MJW"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

