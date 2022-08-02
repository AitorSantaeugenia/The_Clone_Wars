// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl9Pqp2aVCMmLfFSYmSA2q5tHWcFwxzUA",
  authDomain: "netflix-tcw.firebaseapp.com",
  projectId: "netflix-tcw",
  storageBucket: "netflix-tcw.appspot.com",
  messagingSenderId: "180600624103",
  appId: "1:180600624103:web:066b7865851f1b298f6342",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
