import { Navigate, useLocation } from "react-router-dom";
import userAuth from "../hooks/userAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = userAuth();
  const location = useLocation();
  if (user) {
    return { children };
  }
  if (loader) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-amber-600"></div>
    );
  }

  return <Navigate to={`/login`} state={location?.pathname}></Navigate>;
};

export default PrivateRoutes;
