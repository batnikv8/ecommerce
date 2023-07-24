import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaCzvlnY0AWhGv-pnxR0BU7-TnWsDb6u4",
  authDomain: "ecommerce-1c188.firebaseapp.com",
  projectId: "ecommerce-1c188",
  storageBucket: "ecommerce-1c188.appspot.com",
  messagingSenderId: "625963671469",
  appId: "1:625963671469:web:6e57ed1d54d5c2a2370b24",
  measurementId: "G-LPJSZS5QPB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
