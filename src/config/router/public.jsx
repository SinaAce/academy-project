import { createBrowserRouter } from "react-router-dom";
import { commonRoute } from "./commonRoute";
import MainLayout from "../../components/Layout/MainLayout";
import LoginPage from "../../pages/Login";

export const publicRoutes = createBrowserRouter([
  ...commonRoute,
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
