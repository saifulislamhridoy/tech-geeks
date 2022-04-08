// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9oFWgbOwurzWXlVpGh_YEWQzM6bjFDLk",
  authDomain: "tech-geeks-747f5.firebaseapp.com",
  projectId: "tech-geeks-747f5",
  storageBucket: "tech-geeks-747f5.appspot.com",
  messagingSenderId: "814796503839",
  appId: "1:814796503839:web:143aa6e438b583c2d00e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;