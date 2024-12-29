import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [effectToggle, setEfectToggle] = useState(false);
  // console.log(user);
  const resiterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAndsignUpByGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (userInfo) => {
    console.log(userInfo);
    return updateProfile(auth.currentUser, userInfo);
  };
  const userLogOut = () => {
    return signOut(auth);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [effectToggle]);
  const authInfo = {
    resiterUser,
    updateUserProfile,
    user,
    setUser,
    effectToggle,
    setEfectToggle,
    userLogOut,
    userLogin,
    signInAndsignUpByGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
