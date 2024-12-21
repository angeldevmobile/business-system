// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF5m1Urp-OF0BBFje9vR_2cELQuolLNwQ",
  authDomain: "busisness-system.firebaseapp.com",
  projectId: "busisness-system",
  storageBucket: "busisness-system.firebasestorage.app",
  messagingSenderId: "422516990364",
  appId: "1:422516990364:web:eb01b00806272235f42859",
  measurementId: "G-ZCQF29NN2W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Inicializa Firestore
// const analytics = getAnalytics(app);