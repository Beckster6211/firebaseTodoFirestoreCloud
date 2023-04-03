// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtDc6CpfFuo3F_ZZ82IHLDkL5m4xHAH9w",
  authDomain: "todo-firebase-cloudfirebase.firebaseapp.com",
  projectId: "todo-firebase-cloudfirebase",
  storageBucket: "todo-firebase-cloudfirebase.appspot.com",
  messagingSenderId: "930979849865",
  appId: "1:930979849865:web:251291c058967cc909c858",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
