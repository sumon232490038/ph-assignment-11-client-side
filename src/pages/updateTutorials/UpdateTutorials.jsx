import Swal from "sweetalert2";
import userAuth from "../../hooks/userAuth";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateTutorials = () => {
  const { user } = userAuth();
  const { id } = useParams();
  const [tutorial, setToturials] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tutorialBy/${id}`).then((res) => {
      setToturials(res.data);
    });
  }, []);
  const hnadleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tutorData = Object.fromEntries(formData.entries());
    const { language, ...newTutorData } = tutorData;
    const newLanguage = language.toLowerCase();
    newTutorData.language = newLanguage;

    axios
      .post(`http://localhost:5000/updateTutorial/${id}`, newTutorData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire(
            {
              position: "top-end",
              icon: "success",
              title: "Your Tutorial  is Updated!!",
              showConfirmButton: false,
              timer: 1500,
            },
            Navigate("/myTutrials")
          );
        }
      });
  };
  return (
    <div className="p-2">
      <div>
        <h1 className="text-center text-4xl font-bold -mb-6">
          Tutorial update page
        </h1>
        <form onSubmit={hnadleForm} className="card-body ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Tutorial Name</span>
            </label>
            <input
              name="tutorialName"
              type="text"
              // placeholder="Name"
              defaultValue={tutorial?.tutorialName}
              className="input input-bordered border-black dark:text-black "
              required
            />
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
            {/* {HR Name} */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text dark:text-white">Tutor Name</span>
              </label>
              <input
                name="name"
                type="text"
                readOnly
                // placeholder="Name"
                defaultValue={user?.displayName}
                className="input input-bordered border-black dark:text-black "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                name="email"
                type="email"
                readOnly
                defaultValue={user?.email}
                // placeholder="Email"
                className="input input-bordered border-black dark:text-black "
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* {HR Name} */}
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">PhotoURL</span>
              </label>
              <input
                name="photoUrl"
                type="url"
                // placeholder="PhotoURL"
                defaultValue={tutorial.photoUrl}
                className="input input-bordered border-black dark:text-black "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Price</span>
              </label>
              <input
                name="price"
                type="number"
                defaultValue={tutorial.price}
                // placeholder="Price"
                className="input input-bordered border-black dark:text-black "
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* {HR Name} */}
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Review</span>
              </label>
              <input
                name="review"
                type="number"
                // placeholder="Review"
                defaultValue={tutorial.review === 0 ? 0 : tutorial.review}
                readOnly
                className="input input-bordered border-black dark:text-black "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Language</span>
              </label>
              <input
                name="language"
                type="text"
                defaultValue={tutorial.language}
                className="input input-bordered border-black dark:text-black "
                required
              />
            </div>
          </div>

          {/* {job-Discription} */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Discription</span>
            </label>
            <textarea
              // placeholder="Discription"
              defaultValue={tutorial.description}
              name="description"
              className="textarea textarea-bordered textarea-lg w-full border-black dark:text-black "
            ></textarea>
          </div>

          {/* submit btn */}
          <div className="form-control mt-6 ">
            <button className="btn bg-black text-white  dark:border-white  btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTutorials;
