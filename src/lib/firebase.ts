// Import the functions you need from the SDKs you need
import { GoogleAIBackend } from 'firebase/ai';
import { getAI } from 'firebase/ai';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxWnAGleWjHw_irllh51Uge-UuSom1NwM",
  authDomain: "manglam-website-bff09.firebaseapp.com",
  projectId: "manglam-website-bff09",
  storageBucket: "manglam-website-bff09.firebasestorage.app",
  messagingSenderId: "496114606759",
  appId: "1:496114606759:web:6eb21897b34aa24999f182",
  measurementId: "G-TQ6E7720C0"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Enable offline persistence
if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support persistence.');
    }
  });
}

export { app, auth, db, ai };