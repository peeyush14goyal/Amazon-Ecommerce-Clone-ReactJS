import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqsOhIBCfQxVQEpqbmWEeTxQ_XmbYAmXI",
  authDomain: "fullstack-clone-a3972.firebaseapp.com",
  databaseURL: "https://fullstack-clone-a3972.firebaseio.com",
  projectId: "fullstack-clone-a3972",
  storageBucket: "fullstack-clone-a3972.appspot.com",
  messagingSenderId: "701335119915",
  appId: "1:701335119915:web:9a3ba752f08ba2dab9226e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
