// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnRYtlUAupt2ei6VAvZZk9OgbcvGWY0vE",
  authDomain: "jp-coderhouse.firebaseapp.com",
  projectId: "jp-coderhouse",
  storageBucket: "jp-coderhouse.appspot.com",
  messagingSenderId: "299385195705",
  appId: "1:299385195705:web:507d992873b93a769fdf68",
  measurementId: "G-KSVGQNWF35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    app,
    db
}