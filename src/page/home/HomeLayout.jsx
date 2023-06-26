import Footer from "../../components/footer/Footer";
import Banner from "../../components/header/Banner";
import Navber from "../../components/header/Navber";
import ChefContener from "./chef/ChefContener";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipesOverviewContener from "./recipes-overview/RecipesOverviewContener";
import CustomerReview from "./review/CustomerReview";
import AboutOverview from "./review/about-section/AboutOverview";
import Sponsor from "./Sponsor";

const HomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <AboutOverview />
      <div className="chef-contener">
        <RecipesOverviewContener />
        <ChefContener></ChefContener>
        <Sponsor />
        <CustomerReview />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default HomeLayout;
