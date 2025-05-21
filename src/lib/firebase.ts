// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7hKzfz6q0X_-EpUk3uGzjs7TMew2ZcQ",
  authDomain: "mangalm-8230d.firebaseapp.com",
  projectId: "mangalm-8230d",
  storageBucket: "mangalm-8230d.firebasestorage.app",
  messagingSenderId: "879402609117",
  appId: "1:879402609117:web:d0521f05ccddc256952e34",
  measurementId: "G-SHTF3NEKQ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);