import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
  return (
    <header className="p-2 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 border m-2 ">
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
              className="rounded-md"
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
              <NavLink className="flex items-center px-3 -mb-1  dark:border- text-violet-400 dark:text-violet-600 border-violet-400 dark:border-violet-600">
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
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="mr-5">
            <MdOutlineLightMode className="text-2xl" />
          </button>
          <Link>
            {" "}
            <button className="px-3 py-2 mr-2 font-semibold  rounded bg-violet-400 dark:bg-violet-600  dark:text-gray-50">
              Register
            </button>
          </Link>
          <Link>
            {" "}
            <button className="px-3 py-2 font-semibold  rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
              Log in
            </button>
          </Link>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
