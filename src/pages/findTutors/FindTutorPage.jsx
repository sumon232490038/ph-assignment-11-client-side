import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import userAuth from "../../hooks/userAuth";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottee from "../../../public/reactLotte/lotte2.json";

const FindTutorPage = () => {
  const { user, setLoader, texts, setTexts } = userAuth();
  const [search, setSearch] = useState("");
  const [tutors, setTutors] = useState([]);
  console.log(tutors.length);

  useEffect(() => {
    if (texts) {
      axios
        .get(`http://localhost:5000/find-tutors/category?language=${texts}`)
        .then((res) => {
          setTutors(res.data);
          console.log(res);
          setLoader(false);
          // setTexts("");
        });
    } else {
      axios.get(`http://localhost:5000/find-tutors`).then((res) => {
        setTutors(res.data);
        setLoader(false);
        console.log(res);
      });
    }
  }, [user?.email, texts]);
  return (
    <div className="px-2 my-10">
      <div className="flex items-center justify-center mb-5">
        <fieldset className="w-full flex gap-2  space-y-1 dark:text-gray-800">
          <div className="relative  ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 dark:text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </span>
            <input
              type="text"
              name="search"
              onClick={() => setTexts("")}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-amber-600"
            />
          </div>
          <button onClick={() => setTexts("")} className="btn btn-sm">
            All
          </button>
        </fieldset>
      </div>
      {tutors.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {tutors
            ?.filter((tutor) => {
              return search.toLowerCase() === ""
                ? tutor
                : tutor.language.toLowerCase().includes(search.toLowerCase());
            })
            .map((tutor) => (
              <div
                key={tutor._id}
                className="grid grid-cols-3 border gap-3 rounded-lg p-2 hover:bg-slate-300 dark:hover:bg-slate-700"
              >
                <div>
                  <img
                    className="h-48 w-full rounded-lg"
                    src={tutor.photoUrl}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className="flex justify-center items-center gap-1">
                    Tutorail Name: {tutor.tutorialName}
                  </h1>
                  <h1 className="flex items-center gap-1 capitalize">
                    <img
                      src="https://i.ibb.co.com/6NMtzHZ/icons8-language-94.png"
                      className="h-6"
                      alt=""
                    />
                    Language: {tutor.language}
                  </h1>
                  <h1 className="flex items-center gap-1">
                    {" "}
                    <img
                      src="https://i.ibb.co.com/44C6rPh/icons8-review-48.png"
                      className="h-6"
                      alt=""
                    />
                    Review: {tutor.review}
                  </h1>
                </div>
                <div className="flex items-center justify-center">
                  <Link to={`/tutor/details/${tutor._id}`}>
                    {" "}
                    <button className="btn btn-neutral">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Lottie className="h-80" animationData={lottee}></Lottie>
      )}
    </div>
  );
};

export default FindTutorPage;
