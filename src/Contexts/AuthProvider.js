import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);




  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInwithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Email Varification Will apply later 
  const emailVarification = () => {
    return sendEmailVerification(auth.currentUser);
  };


  // Sending User name and Photo  
  const userInformationProviding = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };


  // Resting the password
  const userPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createAccount,
    signInwithProvider,
    logOut,
    emailVarification,
    userInformationProviding,
    login,
    userPasswordReset,
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
