import { BrowserRouter, useRoutes } from "react-router-dom";
import { commonRoute } from "../Config/Router/common.route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTokenFromStorage } from "../Components/Features/Auth/AuthSlice";
import ScrollToTop from "./../components/ScrollToTop/ScrollToTop";

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
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
