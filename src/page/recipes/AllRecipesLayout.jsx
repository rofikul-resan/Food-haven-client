import React from "react";
import Navber from "../../components/header/Navber";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AllRecipesLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default AllRecipesLayout;
