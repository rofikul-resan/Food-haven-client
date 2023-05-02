import React from "react";
import Navber from "../../components/header/Navber";
import { Outlet } from "react-router-dom";

const AllRecipesLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet />
    </div>
  );
};

export default AllRecipesLayout;
