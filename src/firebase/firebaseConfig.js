// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import auth for authentication
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClvDYtp0HUfcqcuX75I4vwyZovrMdM_X4",
    authDomain: "genial-89a74.firebaseapp.com",
    projectId: "genial-89a74",
    storageBucket: "genial-89a74.firebasestorage.app",
    messagingSenderId: "116301747508",
    appId: "1:116301747508:web:bd7bd5d6bfec4b48c3c161",
    measurementId: "G-2PYKY1Q9YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth for authentication
export const auth = getAuth(app);

// Export Firestore (db)
export const db = getFirestore(app);

// Optionally, keep Analytics
const analytics = getAnalytics(app);
