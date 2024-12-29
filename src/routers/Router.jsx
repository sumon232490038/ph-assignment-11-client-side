import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import RegisterPage from "../pages/register/RegisterPage";
// import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  //   {
  //     path: "*",
  //     element: <ErrorPage></ErrorPage>,
  //   },
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
