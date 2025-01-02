import { useLoaderData, useParams } from "react-router-dom";
import userAuth from "../../hooks/userAuth";
import axios from "axios";
import Swal from "sweetalert2";

const TutorsDetailsPage = () => {
  const { user } = userAuth();
  const tutor = useLoaderData();

  const handleBookedTutor = (id) => {
    console.log(id);
    const bookedInfo = {
      tutorialName: tutor.tutorialName,
      tutorId: tutor._id,
      photoUrl: tutor.photoUrl,
      language: tutor.language,
      tutorEmail: tutor.email,
      userEmail: user.email,
      price: tutor.price,
      review: tutor.review,
      descripiton: tutor.description,
    };

    axios
      .post(`http://localhost:5000/myBookedTutors`, bookedInfo)
      .then((res) => {
        console.log(res);
        if (res) {
          Swal.fire("Tutor booking successfull!");
        }
      });
  };

  return (
    <div className="p-2 my-20">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 border p-2 rounded-lg dark:bg-slate-500 bg-slate-300  gap-3">
          <div>
            <img className="h-56 w-full" src={tutor.photoUrl} alt="" />
          </div>
          <div className="text-xl flex flex-col justify-center">
            <h1 className="flex items-center gap-1">
              <img
                src="https://i.ibb.co.com/NY64VmD/icons8-tutorial-32-1.png"
                className="h-6"
                alt=""
              />
              Tutorail Name: {tutor.tutorialName}
            </h1>
            <h1 className="flex items-center gap-1">
              <img
                src="https://i.ibb.co.com/wCRwJX0/icons8-training-50.png"
                className="h-6"
                alt=""
              />
              Tutor: {user.displayName}
            </h1>
            <h1 className="flex items-center gap-1">
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
            <h1 className="flex items-center gap-1">
              <img
                src="https://i.ibb.co.com/25y06p7/icons8-price-48.png"
                className="h-6"
                alt=""
              />
              Price: ${tutor.price}/Hour
            </h1>
            <h1 className="flex  gap-1">
              <img
                src="https://i.ibb.co.com/Mckswdg/icons8-description-64.png"
                className="h-6"
                alt=""
              />
              Description: {tutor.description}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            {" "}
            <button
              onClick={() => handleBookedTutor(tutor._id)}
              className="btn btn-neutral "
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetailsPage;
