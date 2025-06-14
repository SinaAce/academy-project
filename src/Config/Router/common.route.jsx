import MainLayout from "../../Components/Layout/MainLayout";
import Landing from "../../Components/Pages/Landing";
import Course from "../../Components/Pages/Course/Course";
import LoginPage from "../../Components/Pages/Auth/Login";
import Register from "../../Components/Pages/Auth/Register";
import Forgotpass from "../../Components/Pages/Auth/Forgotpass";
import Notfound from "../../Components/Pages/404/Notfound";
import PrivateRoute from "./privateRoute";
import StudentPanel from "./../../Components/StudentPanel/StudentPanel";
import Dashboard from "./../../Components/StudentPanel/Dashboard";
import EditProfile from "./../../Components/StudentPanel/Profile/EditProfile";
import FavCourses from "../../components/StudentPanel/FavCourses";
import CourseDetail from "../../components/Pages/Course/CourseDetail/CourseDetail";

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/course/:courseId",
        element: <CourseDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/forgotpassword",
    element: <Forgotpass />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        <StudentPanel />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <EditProfile />,
      },
      {
        path: "favoriteCourses",
        element: <FavCourses />,
      },
    ],
  },
];
