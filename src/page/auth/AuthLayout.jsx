import Navber from "../../components/header/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const AuthLayout = () => {
  return (
    <div>
      <Navber />
      <div className="relative h-full box-border ">
        <img
          className="w-full blur-sm hidden md:block "
          src="/auth-bg.jpg"
          alt=""
        />
        <div className="md:absolute inset-0 z-10 bg-black/60">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
