import { Link, useLocation, useNavigate } from "react-router-dom";
import userAuth from "../../hooks/userAuth";
import Swal from "sweetalert2";
import axios from "axios";

const LoginPage = () => {
  const {
    userLogin,

    signInAndsignUpByGoogle,
    setLoader,
    user,
  } = userAuth();
  const Navigate = useNavigate();
  const location = useLocation();
  const backPrev = location?.state || "/";

  const handleLoginFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    userLogin(formData.email, formData.password)
      .then(() => {
        axios
          .post(
            "http://localhost:5000/jwt",
            { email: formData.email },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));

        Swal.fire(
          {
            title: "Success!",
            text: "Your Login Successfull!!!",
            icon: "success",
          },
          // Navigate(backPrev),
          setLoader(false)
        );
      })
      .catch((error) => {
        {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      });
  };

  const handleSignInByGoogle = (e) => {
    e.preventDefault();
    signInAndsignUpByGoogle()
      .then((res) => {
        const tokenData = { email: res.user.email };
        axios
          .post("http://localhost:5000/jwt", tokenData, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));

        Swal.fire(
          {
            title: "Good job!",
            text: "Your Login Successfull By Google!",
            icon: "success",
          },
          // Navigate(backPrev),
          setLoader(false)
        );
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="mx-auto p-5 my-10">
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-black dark:bg-gray-50 text-white dark:text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-white dark:text-black">
          Dont have account?
          <Link to={`/register`} className="focus:underline hover:underline">
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            // type="button"
            onClick={handleSignInByGoogle}
            className="flex items-center justify-center w-full p-4 space-x-4 border border-white dark:border-black rounded-md focus:ring-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Register with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-white  dark:text-black" />
          <p className="px-3 text-white dark:text-black">OR</p>
          <hr className="w-full text-white dark:text-black" />
        </div>
        <form onSubmit={handleLoginFrom} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-white-700 dark:border-black bg-white dark:bg-gray-50 text-black "
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-white dark:text-white"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-white-700 dark:border-black bg-white dark:bg-gray-50 text-black "
              />
            </div>
          </div>
          <button className="w-full px-8 py-3 font-semibold rounded-md bg-black hover:bg-white hover:text-black hover:border-white border dark:bg-black dark:hover:bg-white dark:hover:border-black dark:hover:text-black text-white dark:text-white">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
