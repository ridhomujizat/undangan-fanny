// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnlit43D3RlFNL8hv3-LYj8F7vxQQ7Vnc",
  authDomain: "undangan-fanni.firebaseapp.com",
  projectId: "undangan-fanni",
  storageBucket: "undangan-fanni.appspot.com",
  messagingSenderId: "369491743153",
  appId: "1:369491743153:web:3ab8b7001e85796ebd2d90",
  measurementId: "G-Q6B1NNJYER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db