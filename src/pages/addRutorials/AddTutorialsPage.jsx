import Swal from "sweetalert2";
import userAuth from "../../hooks/userAuth";
import axios from "axios";

const AddTutorialsPage = () => {
  const { user } = userAuth();
  const hnadleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tutorData = Object.fromEntries(formData.entries());
    const { language, ...newTutorData } = tutorData;
    const newLanguage = language.toLowerCase();
    newTutorData.language = newLanguage;
    // console.log(newTutorData);

    axios
      .post("http://localhost:5000/addTutorials", newTutorData)
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Tutorials is added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-2">
      <div>
        <form onSubmit={hnadleForm} className="card-body ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Tutorial Name</span>
            </label>
            <input
              name="tutorialName"
              type="text"
              placeholder="Example: English basic to advanced"
              // defaultValue={user?.displayName}
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
                placeholder="PhotoURL"
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
                // defaultValue={user?.email}
                placeholder="Price"
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
                placeholder="Review"
                defaultValue={0}
                className="input input-bordered border-black dark:text-black "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Language</span>
              </label>
              <input
                name="language"
                type="text"
                placeholder="Language"
                className="input input-bordered border-black dark:text-black uppercase"
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
              placeholder="Discription"
              name="description"
              className="textarea textarea-bordered textarea-lg w-full border-black dark:text-black "
            ></textarea>
          </div>

          {/* submit btn */}
          <div className="form-control mt-6 ">
            <button className="btn bg-black text-white  dark:border-white  btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorialsPage;
