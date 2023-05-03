/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RiseLoader } from "react-spinners";
import { AuthContext } from "../Provider/AuthProvider";

const LoadingPage = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="absolute min-h-screen min-w-full flex justify-center items-center">
        <RiseLoader color="#000" />
      </div>
    );
  }

  return children;
};

export default LoadingPage;
