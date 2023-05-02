import { Outlet } from "react-router-dom";
import Banner from "../../components/header/Banner";
import Navber from "../../components/header/Navber";
import ChefContener from "./chef/ChefContener";

const HomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <ChefContener></ChefContener>
    </div>
  );
};

export default HomeLayout;
