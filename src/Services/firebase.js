// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQVvVUIKgLRqZgeGiKac4DSg93VSnCtw",
  authDomain: "flowerslogin-f4de6.firebaseapp.com",
  projectId: "flowerslogin-f4de6",
  storageBucket: "flowerslogin-f4de6.appspot.com",
  messagingSenderId: "561622247043",
  appId: "1:561622247043:web:905f867d17374ae28a9db6",
  measurementId: "G-FD18DSDZ6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
