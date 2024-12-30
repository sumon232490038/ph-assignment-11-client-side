import { FaSearch } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { RiVidiconLine } from "react-icons/ri";
const ExtraSection3 = () => {
  return (
    <div className="p-2">
      <h1 className="text-center text-4xl font-bold">
        Private online tutoring in 3 easy steps
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-5 mt-8 ">
        <div className="border dark:border-white h-48 p-5 border-black  space-y-5">
          <h1 className="flex items-center gap-1 font-bold text-xl ">
            <FaSearch />
            Find the best online tutor
          </h1>
          <p>
            Discover a vast selection of online tutors who specialize in your
            course. Our online tutors cover all subjects and levels, so you can
            easily find the perfect match for your needs.
          </p>
        </div>
        <div className="border dark:border-white  h-48 p-5 border-black  space-y-5">
          <h1 className="flex items-center gap-1 font-bold text-xl ">
            <GrSchedulePlay />
            Book online sessions any time
          </h1>
          <p>
            Schedule a session with your online tutor via desktop or mobile.
            Collaborate with your tutor and learn effectively in real-time.
          </p>
        </div>
        <div className="border dark:border-white  h-48 p-5 border-black  space-y-5">
          <h1 className="flex items-center gap-1 font-bold text-xl ">
            <RiVidiconLine /> Join our online classroom
          </h1>
          <p>
            Connect with your online tutor through our interactive online
            classroom. Share your course syllabus and create a customized plan
            for success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection3;
