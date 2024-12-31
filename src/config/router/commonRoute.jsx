import MainLayout from "../../components/Layout/MainLayout";
import Landing from "../../components/Landing";
import Course from "../../components/Course/Course";

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
