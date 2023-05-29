import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD2bS3Ynaxd9eWXhrHHbO-eao4-DNIuog",
  authDomain: "basic-crud-7a6b7.firebaseapp.com",
  projectId: "basic-crud-7a6b7",
  storageBucket: "basic-crud-7a6b7.appspot.com",
  messagingSenderId: "320071939630",
  appId: "1:320071939630:web:9a99d9848e690190eb11bf"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);