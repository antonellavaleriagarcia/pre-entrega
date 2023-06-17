// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-dietetica.firebaseapp.com",
  projectId: "tienda-dietetica",
  storageBucket: "tienda-dietetica.appspot.com",
  messagingSenderId: "1004914851283",
  appId: "1:1004914851283:web:41a42194cbd4e692cd0326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
