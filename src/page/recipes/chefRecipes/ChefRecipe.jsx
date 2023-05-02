import { BsHandThumbsUpFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard";

const ChefRecipe = () => {
  const data = useLoaderData();
  const { selectedChef, chefRecipes } = data;
  const { img, name, experience, birthday, birthPlace, about } = selectedChef;
  return (
    <div className="bg-black pb-24">
      <div className="overflow-hidden">
        <img
          className="w-full h-[300px] chef-profile-banner relative"
          src="/slider3.jpeg"
          alt=""
        />
      </div>
      <img
        className="relative mx-auto z-10 h-[300px] -top-[150px] border-[8px] border-yellow-100  p-3  "
        src={img}
        alt=""
      />

      {/* chef information */}
      <div className="md:w-[60%] mx-auto text-center -mt-28 text-white">
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
        <p className="text-sm mt-3 pt-2 border-t border-t-white text-justify">
          {about}
        </p>

        {/* chef info footer  */}
        <div className="flex  items-center justify-between px-4 md:px-20 py-2  mt-10 rounded-md bg-white/10 w-full">
          <p>Total Recipes {chefRecipes.length} items</p>
          <div className="flex items-center gap-1">
            <BsHandThumbsUpFill />
            <span>400</span>
          </div>
        </div>
      </div>

      {/* all Recipes of this chef */}
      <div className="grid grid-cols-3 justify-items-center w-10/12 mx-auto gap-6 mt-12">
        {chefRecipes.map((recipe) => (
          <FoodCard key={recipe.idMeal} food={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipe;
