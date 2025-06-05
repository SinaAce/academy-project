import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import Landing from "../../Components/Pages/Landing";
import Course from "../../Components/Pages/Course/Course";

export const commonRoute = createBrowserRouter([
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
]);
