import { Navigate, useLocation } from "react-router-dom";
import userAuth from "../hooks/userAuth";
import LoadingPage from "../components/LoadingPage";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = userAuth();
  const location = useLocation();

  if (loader) {
    return <LoadingPage></LoadingPage>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={`/login`} state={location?.pathname}></Navigate>;
};

export default PrivateRoutes;
