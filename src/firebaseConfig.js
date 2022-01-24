// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAygbEHZUBn80sXG4uHpjEES7PE-0H5o68",
  authDomain: "rainergrenblog.firebaseapp.com",
  projectId: "rainergrenblog",
  storageBucket: "rainergrenblog.appspot.com",
  messagingSenderId: "850399932968",
  appId: "1:850399932968:web:3ac3df735d80146d73bb1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
