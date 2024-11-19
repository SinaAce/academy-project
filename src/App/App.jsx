import { RouterProvider } from "react-router-dom";
import "./App.css";
import { commonRoute } from "../config/router/commonRoute";

function App() {
  return <RouterProvider router={commonRoute} />;
}

export default App;
