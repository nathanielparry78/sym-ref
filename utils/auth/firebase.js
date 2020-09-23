// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyClOxNUeMGRedsu8arzoq3JOZ-DSFdrQvg",
  authDomain: "sym-ref.firebaseapp.com",
  databaseURL: "https://sym-ref.firebaseio.com",
  projectId: "sym-ref",
  storageBucket: "sym-ref.appspot.com",
  messagingSenderId: "123701362737",
  appId: "1:123701362737:web:f29964a74ba4fe111e5510"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
