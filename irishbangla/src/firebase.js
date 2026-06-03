import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const requiredEnvKeys = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
];

const missingEnvKeys = requiredEnvKeys.filter((key) => !import.meta.env[key]);

if (missingEnvKeys.length > 0) {
  throw new Error(
    `Missing Firebase environment variables: ${missingEnvKeys.join(", ")}. ` +
      "Create a .env.local file from .env.example and add your Firebase web app config."
  );
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app);

// Auth (admin console only — enable Email/Password in Firebase Console)
export const auth = getAuth(app);
