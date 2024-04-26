// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqBRCcE2TdwTj2sBd7y0jY_mdOS04mXI",
  authDomain: "trek-tales.firebaseapp.com",
  projectId: "trek-tales",
  storageBucket: "trek-tales.appspot.com",
  messagingSenderId: "516307095001",
  appId: "1:516307095001:web:09f51926b4fb8ef2c85dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;