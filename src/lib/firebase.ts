// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIWIdIfy8zsPd6xx-uaJ-s8Z2le0ie9mY",
    authDomain: "smmuhendislik-5751e.firebaseapp.com",
    projectId: "smmuhendislik-5751e",
    storageBucket: "smmuhendislik-5751e.firebasestorage.app",
    messagingSenderId: "724884038735",
    appId: "1:724884038735:web:14bc089cd0ba662784363a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
