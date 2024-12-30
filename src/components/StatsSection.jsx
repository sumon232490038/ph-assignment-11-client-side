import { TiStar } from "react-icons/ti";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 mx-auto gap-4 md:grid-cols-3 lg:grid-cols-5 p-2 ">
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">50,000+</h1>
        <p className="text-xl">Expreienced tutors</p>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">300,000+</h1>
        <p className="text-xl">5-star tutor reviews</p>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">120+</h1>
        <p className="text-xl">Subjects taught</p>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black">180+</h1>
        <p className="text-xl">Tutor nationalities</p>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black dark:border-white dark:text-white p-3">
        <h1 className="text-3xl font-black flex items-center">
          4.8 <TiStar /> <TiStar />
          <TiStar /> <TiStar />
          <TiStar />
        </h1>
        <p className="text-xl">on the App Store</p>
      </div>
    </div>
  );
};

export default StatsSection;
