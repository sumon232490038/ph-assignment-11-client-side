import Lottie from "lottie-react";
import userAuth from "../hooks/userAuth";
import lottee from "../../public/reactLotte/lotte.json";

const Loading = ({ children }) => {
  const { loader } = userAuth();
  if (loader) {
    return <Lottie className="h-96" animationData={lottee}></Lottie>;
  } else {
    return children;
  }
};

export default Loading;
