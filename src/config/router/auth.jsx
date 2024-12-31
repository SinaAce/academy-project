import { createBrowserRouter } from "react-router-dom";
import PanelLayout from "../../components/Layout/UserPanel/PanelLayout";
import PanelPage from "../../pages/Panel";
import { commonRoute } from "./commonRoute";

export const authRoutes = createBrowserRouter([
  ...commonRoute,
  {
    path: "/dashboard",
    element: <PanelLayout />,
    children: [
      {
        index: true,
        element: <PanelPage />,
      },
    ],
  },
]);
