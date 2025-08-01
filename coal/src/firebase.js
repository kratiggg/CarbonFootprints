// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rYFvG6noPJDVRCRtVPduZ45IXEvcn9Y",
  authDomain: "coal-ecf96.firebaseapp.com",
  projectId: "coal-ecf96",
  storageBucket: "coal-ecf96.appspot.com",
  messagingSenderId: "981518170398",
  appId: "1:981518170398:web:d83649f01bd405bd4f710f",
  measurementId: "G-Z37L9JTZ33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app);