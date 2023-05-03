import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRouter = ({ children }) => {
  const { loading } = useContext(AuthContext);
  console.log(loading);

  return children;
};

export default PrivetRouter;
