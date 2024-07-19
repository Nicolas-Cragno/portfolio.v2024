// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAloY0pcq6y7wvL7aWeIHcAqJir9uWunk",
  authDomain: "nicolas-cragno.firebaseapp.com",
  projectId: "nicolas-cragno",
  storageBucket: "nicolas-cragno.appspot.com",
  messagingSenderId: "295788283604",
  appId: "1:295788283604:web:6672840366fcdd53e15d41",
  measurementId: "G-8MEMSQBB8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);