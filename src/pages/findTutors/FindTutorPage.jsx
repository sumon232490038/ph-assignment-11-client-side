import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import userAuth from "../../hooks/userAuth";

const FindTutorPage = () => {
  const { user } = userAuth();

  const [tutors, setTutors] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/find-tutors`).then((res) => {
      setTutors(res.data);
    });
  }, [user.email]);
  return (
    <div className="px-2 my-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {tutors?.map((tutor) => (
          <div key={tutor._id} className="grid grid-cols-3 border gap-3">
            <div>
              <img className="h-full" src={tutor.photoUrl} alt="" />
            </div>
            <div className="text-xl flex flex-col justify-center">
              <h1>Name: {tutor.name}</h1>
              <h1>Language: {tutor.language}</h1>
              <h1>Review: {tutor.review}</h1>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn btn-neutral">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutorPage;
