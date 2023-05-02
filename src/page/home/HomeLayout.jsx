import Banner from "../../components/header/Banner";
import Navber from "../../components/header/Navber";
import ChefContener from "./chef/ChefContener";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <ChefContener></ChefContener>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
