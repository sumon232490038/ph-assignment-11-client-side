import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../provider/Contexts";
import { MdOutlineDarkMode } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavBar = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <header className="p-2 bg-white  dark:bg-black  dark:text-white border-2 text-black">
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
              <NavLink className="flex items-center px-3 -mb-1  dark:border-">
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-3 -mb-1  dark:border- ">
                Find tutors
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-3 -mb-1  dark:border-">
                Add Tutorials
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-3 -mb-1  dark:border-">
                My Tutorials
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-3 -mb-1  dark:border-">
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
            className="mt-2 md:mt-1 md:mr-2 btn  btn-sm p-0"
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
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link>
              {" "}
              <button className="px-3 py-2 mr-2 font-semibold   rounded bg-white  text-black ">
                Register
              </button>
            </Link>
            <Link>
              {" "}
              <button className="px-3 py-2 font-semibold text-black  rounded bg-white">
                Log in
              </button>
            </Link>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end">
            <button className="p-4 lg:hidden mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-black dark:text-white"
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
              className="dropdown-content gap-2 menu border dark:bg-black mt-2 z-[1] w-52 p-2 shadow"
            >
              <NavLink>Home</NavLink>
              <NavLink>Find tutors</NavLink>
              <NavLink>Add Tutorials</NavLink>
              <NavLink>My Tutorials</NavLink>
              <NavLink>My booked tutors</NavLink>
            </ul>
          </div>
          <ReactTooltip id="my-tooltip-1" place="bottom" content={"sumon"} />
        </div>
        {/* end */}
      </div>
    </header>
  );
};

export default NavBar;
