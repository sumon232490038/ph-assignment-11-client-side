import Lottie from "lottie-react";
import lottee from "../../public/reactLotte/lotte.json";

const LoadingPage = () => {
  return (
    <div>
      <Lottie className=" h-96" animationData={lottee}></Lottie>
    </div>
  );
};

export default LoadingPage;
