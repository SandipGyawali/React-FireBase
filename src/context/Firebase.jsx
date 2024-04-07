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
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

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

  const imageUpload = async (image) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);

    const result = await uploadBytes(imageRef, image);
    return result;
  };

  const getAllUsers = async () => {
    let users = [];
    try {
      const usersRef = collection(firestore, "users");
      const querySnapshot = await getDocs(usersRef);
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
    } catch (error) {
      console.error("Error getting users:", error);
    }

    return users;
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        signInWithGoogle,
        getAllUsers,
        imageUpload,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
