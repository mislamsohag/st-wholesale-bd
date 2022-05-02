
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1_oQZRGZUJgN6UuSTVqoXPC7h-3t1_ik",
    authDomain: "simble-firebase-authentication.firebaseapp.com",
    projectId: "simble-firebase-authentication",
    storageBucket: "simble-firebase-authentication.appspot.com",
    messagingSenderId: "471052533140",
    appId: "1:471052533140:web:b8243e5e08244b224e6381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
