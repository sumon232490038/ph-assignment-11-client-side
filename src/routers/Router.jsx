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
import TutorsDetailsPage from "../pages/tutorsDetails/TutorsDetailsPage";
import BookedTutorsPage from "../pages/bookedTutors/BookedTutorsPage";
import Loading from "../components/loading";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <Loading>
            <FindTutorPage></FindTutorPage>
          </Loading>
        ),
      },
      {
        path: "/addTutrials",
        element: (
          <PrivateRoutes>
            <AddTutorialsPage></AddTutorialsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTutrials",
        element: (
          <PrivateRoutes>
            <MyTutorialsPage></MyTutorialsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTutorial/:id",
        element: (
          <PrivateRoutes>
            <UpdateTutorials></UpdateTutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "/tutor/details/:id",
        element: (
          <PrivateRoutes>
            <TutorsDetailsPage></TutorsDetailsPage>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tutor/details/${params.id}`),
      },
      {
        path: "/bookedTutors",
        element: (
          <PrivateRoutes>
            <BookedTutorsPage></BookedTutorsPage>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
