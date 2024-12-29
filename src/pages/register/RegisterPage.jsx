const RegisterPage = () => {
  return (
    <div className="mx-auto p-5 my-20">
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-black dark:bg-gray-50 text-white dark:text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Register to your account
        </h2>
        <p className="text-sm text-center text-gray-400 dark:text-gray-600">
          Already Have An Account ?
          <a
            href="#"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Log in here
          </a>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 dark:border-gray-600 focus:ring-amber-400 focus:dark:ring-amber-600"
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
          <hr className="w-full text-gray-400 dark:text-gray-600" />
          <p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
          <hr className="w-full text-gray-400 dark:text-gray-600" />
        </div>
        <form noValidate="" action="" className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                User Name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Mr. Sumon"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-amber-400 focus:dark:border-amber-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo Url
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Url"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-amber-400 focus:dark:border-amber-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-amber-400 focus:dark:border-amber-600"
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
                  className="text-xs hover:underline text-gray-400 dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-amber-400 focus:dark:border-amber-600"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md bg-white dark:bg-black text-gray-900 dark:text-gray-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
