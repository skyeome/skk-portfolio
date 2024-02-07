import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: "skk-portfolio.firebaseapp.com",
  projectId: "skk-portfolio",
  storageBucket: "skk-portfolio.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
