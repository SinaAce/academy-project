import { BrowserRouter, useRoutes } from "react-router-dom";
import { commonRoute } from "../Config/Router/common.route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTokenFromStorage } from "../Components/Features/Auth/AuthSlice";

const AppRoutes = () => {
  return useRoutes(commonRoute);
};

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(setTokenFromStorage(token));
      }
    }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
