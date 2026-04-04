import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMUV7lpAEGOFzSBd06dsHqKGMwUo0pyjI",
  authDomain: "irishbangla-e9edd.firebaseapp.com",
  projectId: "irishbangla-e9edd",
  storageBucket: "irishbangla-e9edd.appspot.com",
  messagingSenderId: "358465851762",
  appId: "1:358465851762:web:c028e7e8bb1790fc70cdeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app);

// Auth (admin console only — enable Email/Password in Firebase Console)
export const auth = getAuth(app);
