// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGu35FhhZ85vpSPNQ4ocswOeR7NbdQyLo",
  authDomain: "e-shop-app-cfe79.firebaseapp.com",
  projectId: "e-shop-app-cfe79",
  storageBucket: "e-shop-app-cfe79.appspot.com",
  messagingSenderId: "34299804414",
  appId: "1:34299804414:web:64f257057012d709b303af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
