import Footer from "../../components/footer/Footer";
import Banner from "../../components/header/Banner";
import Navber from "../../components/header/Navber";
import ChefContener from "./chef/ChefContener";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipesOverviewContener from "./recipes-overview/RecipesOverviewContener";

const HomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <div className="chef-contener">
        <RecipesOverviewContener />
        <ChefContener></ChefContener>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default HomeLayout;