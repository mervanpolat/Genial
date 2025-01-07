// Import Firebase functions and services
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyClvDYtp0HUfcqcuX75I4vwyZovrMdM_X4",
    authDomain: "genial-89a74.firebaseapp.com",
    projectId: "genial-89a74",
    storageBucket: "genial-89a74.appspot.com", // Corrected storageBucket
    messagingSenderId: "116301747508",
    appId: "1:116301747508:web:bd7bd5d6bfec4b48c3c161",
    measurementId: "G-2PYKY1Q9YS"
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
export const auth = getAuth(app);         // Authentication
export const db = getFirestore(app);      // Firestore
export const storage = getStorage(app);   // Storage

// Export the initialized app as default
export default app;
