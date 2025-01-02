import { useEffect, useState } from "react";
import userAuth from "../../hooks/userAuth";
import axios from "axios";

const BookedTutorsPage = () => {
  const { user } = userAuth();
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myBookedTutors/page?email=${user.email}`)
      .then((res) => {
        setTutors(res.data);
      });
  }, [user.email]);
  return (
    <div>
      {tutors.length !== 0 ? (
        tutors.map((tutor) => (
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              key={tutor._id}
              className="flex gap-3 border justify-center p-3 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700"
            >
              <img src={tutor.photoUrl} alt="" className="h-28" />
              <div className="capitalize">
                <h1>Tutorail Name: {tutor.tutorialName}</h1>
                <h1>Language: {tutor.language}</h1>
                <h1> Price: ${tutor.price}/Hour</h1>
                <button className="btn btn-xs mt-2">Review</button>
                {/* <button className="btn btn-xs mt-2 ml-2">Delete</button> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1 className="text-5xl my-40 text-center">
            You have not booked a tutor
          </h1>
        </>
      )}
    </div>
  );
};

export default BookedTutorsPage;
