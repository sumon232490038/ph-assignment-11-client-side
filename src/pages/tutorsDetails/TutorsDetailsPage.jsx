import { useLoaderData, useParams } from "react-router-dom";
import userAuth from "../../hooks/userAuth";
import { Link } from "react-router-dom";

const TutorsDetailsPage = () => {
  const param = useParams();
  const { user } = userAuth();
  const tutor = useLoaderData();

  return (
    <div className="p-2 my-20">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border gap-3">
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
            <Link to={`/tutor/details/${tutor._id}`}>
              {" "}
              <button className="btn btn-neutral">Book now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetailsPage;
