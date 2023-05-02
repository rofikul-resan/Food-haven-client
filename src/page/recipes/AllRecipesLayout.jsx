import Navber from "../../components/header/Navber";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";

const AllRecipesLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet />

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default AllRecipesLayout;
