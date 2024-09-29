// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBuWgiB3JB8bjZ273kkbYY6-PdQnBib4ds",
    authDomain: "acmajce.firebaseapp.com",
    projectId: "acmajce",
    storageBucket: "acmajce.appspot.com",
    messagingSenderId: "879530317067",
    appId: "1:879530317067:web:c4a0562856b3582f4e3e0e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (for saving form data)
export const db = getFirestore(app);
