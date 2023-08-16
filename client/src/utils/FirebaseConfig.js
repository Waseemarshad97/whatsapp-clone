// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqr7yPKCaSHjXXNFspwyCcDTH75gGQCVg",
  authDomain: "whatsapp-clone-c5563.firebaseapp.com",
  projectId: "whatsapp-clone-c5563",
  storageBucket: "whatsapp-clone-c5563.appspot.com",
  messagingSenderId: "828709793645",
  appId: "1:828709793645:web:ac647248b171286a39b464",
  measurementId: "G-GRTQ438FK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)