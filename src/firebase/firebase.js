import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCDlakZNSaV8egPgiX9TOx5zZpaSZCeQM",
  authDomain: "luminous-properties-3cf0e.firebaseapp.com",
  projectId: "luminous-properties-3cf0e",
  storageBucket: "luminous-properties-3cf0e.firebasestorage.app",
  messagingSenderId: "478434921329",
  appId: "1:478434921329:web:c577c389e0372a622fc4d0",
  measurementId: "G-JM943GP55W"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);