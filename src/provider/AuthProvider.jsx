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
  const [loader, setLoader] = useState(true);
  const resiterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAndsignUpByGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (userInfo) => {
    setLoader(true);

    return updateProfile(auth.currentUser, userInfo);
  };
  const userLogOut = () => {
    setLoader(true);

    return signOut(auth);
  };

  const userLogin = (email, password) => {
    setLoader(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(true);
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
    loader,
    setLoader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
