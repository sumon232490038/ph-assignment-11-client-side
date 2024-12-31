import axios from "axios";
import { useEffect, useState } from "react";
import userAuth from "../../hooks/userAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const myTutorialsPage = () => {
  const [tutorials, setToturials] = useState([]);
  const { user } = userAuth();
  // console.log(user.email);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myTutorials?email=${user?.email}`, {})
      .then((res) => {
        // console.log(res.data);
        setToturials(res.data);
      });
  }, [user.email]);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/myTutorials/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount) {
          const remaning = tutorials.filter((tutorial) => tutorial._id !== id);
          setToturials(remaning);
          Swal.fire("Youer Tutorial Delete Successfull");
        }
      });
  };
  return (
    <div className="p-2 my-8">
      <div className="overflow-x-auto border border-black dark:border-white">
        <table className="table  border border-black dark:border-white">
          {/* head */}
          <thead>
            <tr className="dark:text-white text-black border border-black dark:border-white">
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border border-black dark:border-white">
            {tutorials.map((tutorial) => (
              <tr
                key={tutorial._id}
                className="border border-black dark:border-white"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={tutorial.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tutorial.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{tutorial.language}</p>
                </td>
                <td>{tutorial.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    {tutorial.review}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(tutorial._id)}
                    className="btn  btn-xs mr-1 mb-1 md:mb-0"
                  >
                    Delete
                  </button>

                  <Link>
                    <button className="btn  btn-xs">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default myTutorialsPage;
