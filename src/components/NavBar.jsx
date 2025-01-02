import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../provider/Contexts";
import { MdOutlineDarkMode } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import userAuth from "../hooks/userAuth";
import Swal from "sweetalert2";
import "animate.css";

const NavBar = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  const { user, userLogOut, setTexts } = userAuth();

  const handleTheme = () => {
    setTheme(!theme);
  };
  const handleLogOut = () => {
    userLogOut();
    Swal.fire({
      title: "LogOut Successfull!!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };

  return (
    <header className="p-2 bg-white/30 backdrop-blur dark:backdrop-blur dark:bg-slate-900/75 dark:border-slate-300/10 z-40 dark:bg-[#0A1120] dark:text-white border-black  dark:border-white border text-black">
      <div className="container flex justify-between h-12  mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://i.ibb.co.com/fkLKvCC/Untitled-design-3.png"
              alt=""
              className="rounded-md dark:border"
            />{" "}
            <h1 className="ml-2 font-black text-xl">TutorXpress</h1>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to={`/`}
                className="flex items-center px-3 -mb-1 hover:underline  dark:border-"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                // onClick={() => setTexts("")}
                to={`/findTutor`}
                className="flex items-center px-3 -mb-1 hover:underline  dark:border- "
              >
                Find tutors
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={`/addTutrials`}
                className="flex items-center px-3 -mb-1 hover:underline  dark:border-"
              >
                Add Tutorials
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={`/myTutrials`}
                className="flex items-center px-3 -mb-1 hover:underline  dark:border-"
              >
                My Tutorials
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={`/bookedTutors`}
                className="flex items-center px-3 -mb-1 hover:underline  dark:border-"
              >
                My booked tutors
              </NavLink>
            </li>
          </ul>
        </div>
        {/* secound div */}
        <div className="flex items-center">
          <button
            onClick={handleTheme}
            id="themeBtn"
            className=" mx-2 btn  btn-sm p-0"
          >
            {theme ? (
              <>
                {" "}
                <MdOutlineLightMode className="text-2xl" />
              </>
            ) : (
              <>
                {" "}
                <MdOutlineDarkMode className="text-2xl" />
              </>
            )}
          </button>
          {user && (
            <div className=" w-10 h-10 lg:mr-2 hidden lg:block lg:h-10 lg:w-10 items-center   ">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className={`rounded-xm  h-full `}
                src={user?.photoURL}
              />
            </div>
          )}
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {user?.email ? (
              <>
                {" "}
                <button
                  onClick={handleLogOut}
                  className="px-3 py-2 mr-2  font-semibold border  border-black  rounded bg-white  text-black "
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to={`/register`}>
                  {" "}
                  <button className="px-3 py-2 mr-2  font-semibold border  border-black  rounded bg-white  text-black ">
                    Register
                  </button>
                </Link>
                <Link to={`/login`}>
                  {" "}
                  <button className="px-3 py-2 font-semibold text-black  border  border-black  rounded bg-white">
                    Log in
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="dropdown dropdown-bottom dropdown-end ">
            <button className="p-2 lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-8 text-black dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content gap-2 bg-white menu border dark:bg-[#0F172A] mt-5 z-[1] w-52 p-2 shadow"
            >
              {user && (
                <div className="flex items-center gap-1 border-b pb-2">
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="bangladesh"
                    className={`rounded-md w-10 h-full `}
                    src={user?.photoURL}
                  />
                  <p className="text-xs">{user?.displayName}</p>
                </div>
              )}
              <NavLink to={`/`}>Home</NavLink>
              <NavLink onClick={() => setTexts("all")} to={`/findTutor`}>
                Find tutors
              </NavLink>
              <NavLink to={`/addTutrials`}>Add Tutorials</NavLink>
              <NavLink to={`/myTutrials`}>My Tutorials</NavLink>
              <NavLink to={`/bookedTutors`}>My booked tutors</NavLink>
              {user?.email ? (
                <>
                  <NavLink>
                    <button
                      onClick={handleLogOut}
                      className="px-3 py-2 mr-2  font-semibold border  border-black  rounded bg-white  text-black "
                    >
                      Log out
                    </button>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to={"/login"}>Login</NavLink>
                  <NavLink to={`/register`}>Register</NavLink>
                </>
              )}
            </ul>
          </div>
          <ReactTooltip id="my-tooltip" place="bottom" />
        </div>
        {/* end */}
      </div>
    </header>
  );
};

export default NavBar;
