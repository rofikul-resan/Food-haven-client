import React from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";

const AllFood = () => {
  const allRecipes = useLoaderData();
  return (
    <div className="grid md:grid-cols-3 px-8 py-11 nav-bg gap-4 pt-6">
      {allRecipes.map((food) => (
        <FoodCard key={food.idMeal} food={food} />
      ))}
    </div>
  );
};

export default AllFood;
