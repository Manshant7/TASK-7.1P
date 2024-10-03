import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCQ4iaq-KHG6J6fVKL4SZTLI2Be-BXosZU",

  authDomain: "task-7p-c130d.firebaseapp.com",

  projectId: "task-7p-c130d",

  storageBucket: "task-7p-c130d.appspot.com",

  messagingSenderId: "347288671624",

  appId: "1:347288671624:web:62764689731c0a2b8ad63d",

  measurementId: "G-X5LB3PWPYE"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
