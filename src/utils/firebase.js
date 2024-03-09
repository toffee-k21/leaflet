// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmcA_5I-K4i6r9KZsbgKu_WmYbXOZL_yM",
  authDomain: "leaflet-28dcc.firebaseapp.com",
  projectId: "leaflet-28dcc",
  storageBucket: "leaflet-28dcc.appspot.com",
  messagingSenderId: "813721808048",
  appId: "1:813721808048:web:e262216d7e7b51e2789f75",
  measurementId: "G-MWSXC1EVNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);