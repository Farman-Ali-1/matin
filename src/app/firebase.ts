// lib/firebase.ts or app/firebase.ts — Firebase configuration and initialization

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASfyJquSRmw-sBZtwp7bse8-T3jymBnO0",
  authDomain: "matin-fe2fb.firebaseapp.com",
  projectId: "matin-fe2fb",
  storageBucket: "matin-fe2fb.appspot.com",
  messagingSenderId: "311191512470",
  appId: "1:311191512470:web:335a03af47aefba6f8a9b7",
  measurementId: "G-HFSQ841ME5",
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Export initialized services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
