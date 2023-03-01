import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1NsvFzX6dfcuHOHP3DhvXy33nyZeND00",
  authDomain: "personal-website-feedback-form.firebaseapp.com",
  projectId: "personal-website-feedback-form",
  storageBucket: "personal-website-feedback-form.appspot.com",
  messagingSenderId: "405285278764",
  appId: "1:405285278764:web:db1a6b8489be046481ad89",
  measurementId: "G-5WXVEYDSKV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);