import userAuth from "../../hooks/userAuth";

const AddTutorialsPage = () => {
  const { user } = userAuth();
  const hnadleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());
    console.log(jobData);

    // fetch("http://localhost:3000/jobs", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newJob),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data) {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Your jobs is added",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });
  };
  return (
    <div className="p-2">
      <div>
        <form onSubmit={hnadleForm} className="card-body ">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
            {/* {HR Name} */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                className="input input-bordered border-black bg-white"
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
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered border-black bg-white"
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
                defaultValue={user?.displayName}
                className="input input-bordered border-black bg-white"
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
                className="input input-bordered border-black bg-white"
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
                defaultValue={user?.displayName}
                className="input input-bordered border-black bg-white"
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
                defaultValue={user?.email}
                placeholder="Language"
                className="input input-bordered border-black bg-white"
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
              className="textarea textarea-bordered textarea-lg w-full border-black "
            ></textarea>
          </div>

          {/* submit btn */}
          <div className="form-control mt-6 ">
            <button className="btn bg-black text-white  dark:border-white  btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorialsPage;
