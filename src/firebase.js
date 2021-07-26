import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyB9kYAes4vEvRioR2jaWobTvTxVAwPdfsY",
    authDomain: "news-api-c0441.firebaseapp.com",
    projectId: "news-api-c0441",
    storageBucket: "news-api-c0441.appspot.com",
    messagingSenderId: "791335586713",
    appId: "1:791335586713:web:d496999d29ea8bb8e7a108"
  };

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
  
export const db = firebase.firestore();

// export const populateDb = (data) => db.collection('news').add(data)
