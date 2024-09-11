// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuyv3cU2G5RRZNygctUNRVI0YYFCm4zPA",
  authDomain: "netflix-gpt-e3f30.firebaseapp.com",
  projectId: "netflix-gpt-e3f30",
  storageBucket: "netflix-gpt-e3f30.appspot.com",
  messagingSenderId: "311419261146",
  appId: "1:311419261146:web:78479adde197e2642795e3",
  measurementId: "G-217RM96JX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Define Auth Centralized
export const auth = getAuth();