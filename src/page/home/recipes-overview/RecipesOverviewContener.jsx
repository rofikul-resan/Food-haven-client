import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodCard from "../../recipes/FoodCard";

const RecipesOverviewContener = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("https://food-heven-server-resan6231-gmailcom.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);
  return (
    <div className="pt-12">
      <img
        className="rounded-full mx-auto h-64 w-64  border-[10px] box-border border-orange-700"
        src="/auth-bg.jpg"
        alt=""
      />
      <div className="w-3/5 mx-auto py-10 text-white text-center">
        <h1 className="mb-6">Our Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eaque quo totam voluptatum minima nostrum repellendus et, incidunt vel
          necessitatibus vero fugiat voluptas eveniet vitae, itaque facilis!
          Quaerat temporibus numquam ipsa, ex vel rerum dolorem amet cupiditate
          iure molestiae ab?
        </p>
      </div>
      <div className="md:w-4/5 mx-auto border rounded-md p-3 mt-6 border-white">
        <div className="flex justify-between text-white border-b pb-1 border-white">
          <p>Our recipe</p>{" "}
          <Link className="underline hover:text-orange-500" to={"/recipes"}>
            {" "}
            see more +
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {recipe.slice(7, 10).map((food) => (
            <FoodCard key={food.idMeal} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesOverviewContener;
