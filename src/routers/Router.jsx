import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
// import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  //   {
  //     path: "*",
  //     element: <ErrorPage></ErrorPage>,
  //   },
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
]);

export default router;
