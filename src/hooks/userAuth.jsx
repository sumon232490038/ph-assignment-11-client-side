import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const userAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default userAuth;
