/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// fire-base config object
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

const firebaseApp = initializeApp(firebaseConfig); // app instance
const firebaseAuth = getAuth(firebaseApp); // auth instance
const googleProvider = new GoogleAuthProvider(); // o-auth google instance

const FirebaseContext = createContext(null);
export const useFireBase = () => useContext(FirebaseContext); //firebase context

export const FirebaseContextProvider = (props) => {
  const { children } = props;

  // method for sign-up user with email and password
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  //o-auth google function
  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        signInWithGoogle,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
