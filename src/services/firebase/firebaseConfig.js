

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwP0dVPJWpUl8E6tEz2sbSdgmbeD5r5CI",
  authDomain: "proyectofinal-react-2be6d.firebaseapp.com",
  projectId: "proyectofinal-react-2be6d",
  storageBucket: "proyectofinal-react-2be6d.appspot.com",
  messagingSenderId: "12227586961",
  appId: "1:12227586961:web:2a6d0a06e6e9c0aad58830",
  measurementId: "G-V8E3STETM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)