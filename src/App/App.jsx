import { RouterProvider } from "react-router-dom";
import { commonRoute } from "../Config/router/commonRoute";

function App() {
  return <RouterProvider router={commonRoute} />;
}

export default App;
