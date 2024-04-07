import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  databaseUrl: "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); //app
export const analytics = getAnalytics(app);
export const auth = getAuth(app); //auth instance
