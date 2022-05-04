// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // firebase app
import {getFirestore} from "firebase/firestore" // firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMuuMVp0_6hE7F4_nzKX8FppPni1FEft8",
  authDomain: "boutiquedebombas.firebaseapp.com",
  projectId: "boutiquedebombas",
  storageBucket: "boutiquedebombas.appspot.com",
  messagingSenderId: "490044500655",
  appId: "1:490044500655:web:1578b67a35e331da70825a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase= getFirestore(app) 
export default dataBase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries