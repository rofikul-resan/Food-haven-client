import { BsArrowRight, BsHandThumbsUpFill } from "react-icons/bs";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ChefCard = ({ chef }) => {
  const { img, total_recipes, name, experience, birthday, birthPlace, about } =
    chef;
  return (
    <div className="p-6 border-2 text-white border-white gap-8 rounded-lg justify-between flex flex-col md:flex-row mb-8 items-center">
      <div className=" rounded-md md:w-2/5 overflow-hidden">
        <LazyLoad className="h-full">
          <img className="h-full" src={img} />
        </LazyLoad>
      </div>
      <div className="md:w-[60%]">
        <h1 className="mb-5">{name}</h1>
        <p>
          {" "}
          <span className="font-semibold text-xl text-yellow-100">
            Birth Date :
          </span>{" "}
          {birthday}
        </p>
        <p>
          <span className="font-semibold text-xl text-yellow-100">Form : </span>
          {birthPlace}
        </p>
        <p>
          {" "}
          <span className="font-semibold text-xl text-yellow-100">
            Experience :{" "}
          </span>
          {experience} Year
        </p>

        <Link
          to={`/recipes/chef/${chef.id}`}
          className="btn btn-sm btn-success w-fit  mt-3 flex gap-3"
        >
          View Recipes <BsArrowRight className="font-bold text-xl" />
        </Link>

        {/* chef info footer  */}
        <div className="flex  items-center justify-between px-4  py-2 -mb-3 mt-3 rounded-md bg-white/10 w-full">
          <p>Total Recipes {total_recipes} items</p>
          <div className="flex items-center gap-1">
            <BsHandThumbsUpFill />
            <span>400</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
