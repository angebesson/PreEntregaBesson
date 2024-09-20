// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1r1sApGh6O4trfVNLa615_lIHOKYr4yc",
  authDomain: "shoplife-4a201.firebaseapp.com",
  projectId: "shoplife-4a201",
  storageBucket: "shoplife-4a201.appspot.com",
  messagingSenderId: "393770436939",
  appId: "1:393770436939:web:816946450957ff02ec40ce",
  measurementId: "G-BL9W8L90KE"
};

// Initialize Firebase service
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Inicializamos la base de datos
export const db = getFirestore(app);