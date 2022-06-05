import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextPorvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUserState, setCurrentUserState] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUserState(user);
      setLoading(false);
    });
  }, []);

  const signup = async (username, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUserState({ ...user });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  // google sign up

  const googleSignUp = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  const value = {
    signup,
    login,
    logout,
    currentUserState,
    googleSignUp,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextPorvider;
