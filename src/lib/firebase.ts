// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// console.log("API KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6-dGCPiwJREcuuD43Axn-HwU57BsRxsc",
  authDomain: "fitvibe-d7ab5.firebaseapp.com",
  projectId: "fitvibe-d7ab5",
  storageBucket: "fitvibe-d7ab5.firebasestorage.app",
  messagingSenderId: "1059305379658",
  appId: "1:1059305379658:web:913daea8d53b243fbcd3b3",
  measurementId: "G-PMSSZ889V3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);