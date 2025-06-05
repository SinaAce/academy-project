import MainLayout from "../../Components/Layout/MainLayout";
import Landing from "../../Components/Pages/Landing";
import Course from "../../Components/Pages/Course/Course";
import LoginPage from "../../Components/Pages/Login";
import StudentPanel from "../../Components/Pages/Panel/index";
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
  // {
  //   path: "/signup",
  //   element: <Register />,
  // },
  // {
  //   path: "/forgotpassword",
  //   element: <Forgotpass />,
  // },
  // {
  //   path: "*",
  //   element: <Notfound />,
  // },
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
