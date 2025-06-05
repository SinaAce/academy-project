<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import Landing from "../../Components/Pages/Landing";
import Course from "../../Components/Pages/Course/Course";
=======
import MainLayout from "../../components/Layout/MainLayout";
import Landing from "../../components/Landing";
import Course from "../../components/Course/Course";
>>>>>>> origin/feature/auth

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Landing /> }],
  },
  {
    path: "/course",
    element: <MainLayout />,
    children: [{ path: "/course", element: <Course /> }],
  },
];
