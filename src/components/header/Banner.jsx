import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="h-[500px] overflow-hidden  relative">
      <img className="w-full blur-sm " src="/slider1.jpg" alt="" />
      <div className="absolute bg-black/60  inset-0 z-10">
        <div className=" grid md:grid-cols-2 w-10/12 mx-auto ">
          <div className="text-white mt-10">
            <h1 className=" text-5xl mb-6">Welcome to our Food Haven</h1>
            <p className="font-semibold w-4/6">
              As a business that relies heavily on the taste of food, being able
              to whip up scrumptious dishes is the number one goal for every
              restaurant, takeaway, or food outlet. This will be second nature
              to your chiefs, but what is the point of making amazing looking
              and tasting dishes if no one is there to eat them?
            </p>
            <Link
              to={"/foods"}
              className="btn btn-primary w-fit mt-6 flex items-center gap-3"
            >
              View all recipe <BsArrowRight className="font-bold text-xl" />
            </Link>
          </div>
          <div>
            <img
              className="absolute bottom-0 right-24 hidden md:block"
              src="/banner-chef.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
