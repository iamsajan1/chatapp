import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAurgTsR_bA126zqBIfRH3xw7T_1FScJVI",
    authDomain: "chat-with-sajan.firebaseapp.com",
    projectId: "chat-with-sajan",
    storageBucket: "chat-with-sajan.appspot.com",
    messagingSenderId: "606024560064",
    appId: "1:606024560064:web:1b24c914ecb8dd8ff4ac25"
  };
  let app;
  if (firebase.apps.length===0){
     app = firebase.initializeApp(firebaseConfig);
  }
  else{
    app=firebase.app();
  }
  const db = firebase.firestore();
  const auth = firebase.auth();
  export { db, auth };