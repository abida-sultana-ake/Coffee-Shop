import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import CoffeeShopLoading from "../components/CoffeeShopLoading";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
      console.log("has current user ", currentUser)
    }
    else{
      console.log("ummm current user", currentUser)
    }
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
  };

  if (loading) {
    return <CoffeeShopLoading />;
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;