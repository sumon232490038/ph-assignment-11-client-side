const ExtraSection4 = () => {
  return (
    <div className="flex flex-col md:flex-row p-2">
      <div className="flex-1">
        <img
          className=""
          src="https://i.ibb.co.com/HGSWvCP/Untitled-design.png"
          alt=""
        />
      </div>
      <div
        className="flex-1  p-10 md:p-8 border border-black dark:border-white space-y-8 md:space-y-5
      lg:p-10 lg:space-y-10"
      >
        <h1 className="text-7xl font-bold lg:text-9xl">Become a tutor</h1>
        <p>
          Earn money sharing your expert knowledge with students. Sign up to{" "}
          <br className="hidden lg:block" />
          start tutoring online with Preply.
        </p>
        <div>
          <h2 className="font-bold text-2xl">. Find new students</h2>
          <h2 className="font-bold text-2xl">. Grow your business</h2>
          <h2 className="font-bold text-2xl">. Get paid securely</h2>
        </div>
        <div>
          <button className="btn w-full bg-black text-white dark:bg-white dark:text-black font-bold text-xl">
            Become a tutor
          </button>
        </div>
        <p className="underline text-center md:hidden lg:block">
          How Our Platform works
        </p>
      </div>
    </div>
  );
};

export default ExtraSection4;
