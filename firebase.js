// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-gHWIPAAk3UyUWsh5-7hx4sXEsJvIquk",
  authDomain: "insta-2-f78c8.firebaseapp.com",
  projectId: "insta-2-f78c8",
  storageBucket: "insta-2-f78c8.appspot.com",
  messagingSenderId: "478030033882",
  appId: "1:478030033882:web:3e4a01e508a4000aefc6e3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };