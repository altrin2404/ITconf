// Firebase Configuration for ICICET2027
// -------------------------------------------------------
// IMPORTANT: Replace the placeholder values below with your
// actual Firebase project config keys. You can find these in:
// Firebase Console → Your Project → Project Settings → Your Apps → Web App
// -------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Uncomment the line below if you add Firebase Storage later (for paper submissions)
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6o_2X7gFVjb61EWvhKE419X9WcGYBvF4",
  authDomain: "icicet2027.firebaseapp.com",
  projectId: "icicet2027",
  storageBucket: "icicet2027.firebasestorage.app",
  messagingSenderId: "511443359210",
  appId: "1:511443359210:web:faa96775961c06e0920e93",
  measurementId: "G-1S23QTW94G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firestore Database
export const db = getFirestore(app);

// Uncomment and export Storage if needed later
// export const storage = getStorage(app);
