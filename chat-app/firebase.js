// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjG84TZ91iILK9OT-a1_ZjeFOfJewPjM",
  authDomain: "chatapp-e17a1.firebaseapp.com",
  projectId: "chatapp-e17a1",
  storageBucket: "chatapp-e17a1.appspot.com",
  messagingSenderId: "419133301925",
  appId: "1:419133301925:web:8407aaba1c54b72536594c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth}