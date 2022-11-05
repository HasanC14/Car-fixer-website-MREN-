import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config.js";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //Login with Google
  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  //Logout
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const UpdateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      console.log("After state changed", CurrentUser);
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const AuthInfo = {
    User,
    LoginWithGoogle,
    LogOut,
    Login,
    Register,
    loading,
    UpdateUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
