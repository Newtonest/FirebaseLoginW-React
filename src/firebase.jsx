import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwLMrBoqkFBqs_akmuwrd86XztukKF4AU",
  authDomain: "fir-login-9d0b4.firebaseapp.com",
  projectId: "fir-login-9d0b4",
  storageBucket: "fir-login-9d0b4.appspot.com",
  messagingSenderId: "1070545078894",
  appId: "1:1070545078894:web:567ebbd0a88c3d84deb47f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};