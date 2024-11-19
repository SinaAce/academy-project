import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout";
import Landing from "../../components/Landing";

export const commonRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Landing /> }],
  },
]);
