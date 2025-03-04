// firebase/config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIgx9w29pDPes9YUhzT5FA6j8HeA8O03k",
  authDomain: "articles-28817.firebaseapp.com",
  projectId: "articles-28817",
  storageBucket: "articles-28817.firebasestorage.app",
  messagingSenderId: "636167872261",
  appId: "1:636167872261:web:59f17c9791855d5e0aa16c",
  measurementId: "G-5M1PH2V34F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Create Firestore instance

// Export the db instance
export { db }; // Export db for use in other files