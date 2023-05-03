/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingPage from "../components/LoadingPage";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingPage />;
  }
  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname} />;
  } else {
    return children;
  }
};

export default PrivetRouter;
