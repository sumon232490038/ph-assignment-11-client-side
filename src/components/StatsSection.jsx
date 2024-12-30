import { TiStar } from "react-icons/ti";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 mx-auto gap-4 md:grid-cols-3 lg:grid-cols-5 p-2 ">
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">50,000+</h1>
        <h2 className="">Expreienced tutors</h2>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">300,000+</h1>
        <h2 className="">tutor reviews</h2>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">120+</h1>
        <h2 className="">Various Language</h2>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">180+</h1>
        <h2 className="">Proud Users</h2>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-2xl font-black flex items-center">
          4.8 <TiStar /> <TiStar />
          <TiStar /> <TiStar />
          <TiStar />
        </h1>
        <h2 className="">on the App Store</h2>
      </div>
    </div>
  );
};

export default StatsSection;
