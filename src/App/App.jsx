import { RouterProvider } from "react-router-dom";
import "./App.css";
import { commonRoute } from "../config/router/commonRoute";
import { authRoutes } from "../config/router/auth";
import { publicRoutes } from "../config/router/public";

function App() {
  const isLogin = false;
  return <RouterProvider router={isLogin ? authRoutes : publicRoutes} />;
}

export default App;
