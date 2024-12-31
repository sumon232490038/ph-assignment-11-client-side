import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
// import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import FindTutorPage from "../pages/findTutors/FindTutorPage";
import AddTutorialsPage from "../pages/addRutorials/AddTutorialsPage";
import MyTutorialsPage from "../pages/myTutorials/myTutorialsPage";
import UpdateTutorials from "../pages/updateTutorials/UpdateTutorials";

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
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/findTutor",
        element: <FindTutorPage></FindTutorPage>,
      },
      {
        path: "/addTutrials",
        element: <AddTutorialsPage></AddTutorialsPage>,
      },
      {
        path: "/myTutrials",
        element: <MyTutorialsPage></MyTutorialsPage>,
      },
      {
        path: "/myTutorial/:id",
        element: <UpdateTutorials></UpdateTutorials>,
      },
    ],
  },
]);

export default router;
