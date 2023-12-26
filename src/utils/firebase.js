// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxobF3g_39bjr01LH18aALF0YkU37Wz5I",
  authDomain: "netflixgpt-182e7.firebaseapp.com",
  projectId: "netflixgpt-182e7",
  storageBucket: "netflixgpt-182e7.appspot.com",
  messagingSenderId: "205412689952",
  appId: "1:205412689952:web:2445d1659afbe0edecb445",
  measurementId: "G-56X5HM6SXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
