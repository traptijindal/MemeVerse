import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCB3Lm-IWYByon_CU0YNY1WaTXHD9JZJTw",
    authDomain: "memeverse-c7a6f.firebaseapp.com",
    projectId: "memeverse-c7a6f",
    storageBucket: "memeverse-c7a6f.firebasestorage.app",
    messagingSenderId: "7255563116",
    appId: "1:7255563116:web:5001f828dae5658fe6b149",
    measurementId: "G-F2GB3V41Z6"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); 
   
