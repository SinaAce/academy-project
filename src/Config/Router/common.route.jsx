import MainLayout from "../../Components/Layout/MainLayout";
import Landing from "../../Components/Pages/Landing";
import Course from "../../Components/Pages/Course/Course";
import LoginPage from "../../Components/Pages/Auth/Login";
import StudentPanel from "../../Components/Pages/Panel/index";
import Register from "../../Components/Pages/Auth/Register";
import Forgotpass from "../../Components/Pages/Auth/Forgotpass";
import Notfound from "../../Components/Pages/404/Notfound";

import PrivateRoute from "./privateRoute";

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
    // children: [
    //   {
    //     index: true,
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "profile",
    //     element: <EditProfile />,
    //   },
    // ],
  },
];
