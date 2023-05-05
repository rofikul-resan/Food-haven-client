import Footer from "../../components/footer/Footer";
import Navber from "../../components/header/Navber";
import AboutOverview from "../home/review/about-section/AboutOverview";
import OurLocation from "./OurLocation";

const About = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="h-96 bg-center relative overflow-hidden">
        <img className="w-full" src="/auth-bg.jpg" alt="" />
        <div className="absolute inset-0 z-10 grid place-items-center bg-black/60">
          <h1 className="text-center text-white text-5xl"> About us</h1>
        </div>
      </div>
      <AboutOverview />
      <OurLocation />
      <Footer />
    </div>
  );
};

export default About;
