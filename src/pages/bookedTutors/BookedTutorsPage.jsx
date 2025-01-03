import { useEffect, useState } from "react";
import userAuth from "../../hooks/userAuth";
import axios from "axios";
import Swal from "sweetalert2";

const BookedTutorsPage = () => {
  const { user, setLoader } = userAuth();
  const [tutors, setTutors] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(
    () => {
      axios
        .get(`http://localhost:5000/myBookedTutors/page?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTutors(res.data);
        });
    },
    [user.email],
    render
  );

  const handleReview = (id) => {
    axios.post(`http://localhost:5000/tutor/review/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire(
          {
            position: "top-end",
            icon: "success",
            title: "Your Review is added",
            showConfirmButton: false,
            timer: 1500,
          },
          setRender(!render)
        );
      }
    });
  };

  // /bookedTutor/delete/:id
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/bookedTutor/delete/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          const remaning = tutors.filter((tutorial) => tutorial._id !== id);
          setTutors(remaning);
          setLoader(false);
          Swal.fire("Youer Tutorial Delete Successfull");
        }
      });
  };

  return (
    <div>
      {tutors.length !== 0 ? (
        <>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {tutors.map((tutor) => (
              <div
                key={tutor._id}
                className="flex gap-3 border justify-center p-3 items-center rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700"
              >
                <img
                  src={tutor.photoUrl}
                  alt=""
                  className="h-28 w-40 rounded-md"
                />
                <div className="capitalize">
                  <h1>Tutorail Name: {tutor.tutorialName}</h1>
                  <h1>Language: {tutor.language}</h1>
                  <h1> Price: ${tutor.price}/Hour</h1>
                  <button
                    onClick={() => handleReview(tutor.tutorId)}
                    className="btn btn-xs mt-1"
                  >
                    Review
                  </button>
                  <button
                    onClick={() => handleDelete(tutor._id)}
                    className="btn btn-xs mt-1 ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
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
