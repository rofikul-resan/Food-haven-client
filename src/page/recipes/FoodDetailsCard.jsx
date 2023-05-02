import React from "react";
import { BsStar, BsStarFill, BsYoutube } from "react-icons/bs";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const FoodDetailsCard = () => {
  const recipe = useLoaderData();
  const rating = 3 + +(Math.random() * 2).toFixed(1);
  const { MealThumb, Meal, Instructions, Ingredient, Category, Area } = recipe;

  return (
    <div className="p-10 overflow-hidden">
      <div className="bg-orange-600  md:h-96 md:w-96 rounded-full scale-[2] absolute blur-3xl  -top-1/2 -right-[7%] -z-10"></div>
      <div className="bg-violet-600 md:h-96 md:w-96 rounded-full scale-[2] absolute  blur-3xl -top-1/2 -left-[7%] -z-10"></div>
      <div className="card glass mx-auto h-96 mt-10 md:w-10/12 flex-col md:flex-row rounded-lg overflow-hidden shadow-xl">
        <span className="badge badge-primary absolute top-3 left-3">
          {Area}
        </span>
        <span className="badge badge-success absolute top-10 left-3">
          #{Category}
        </span>
        <figure>
          <img className="h-full" src={MealThumb} alt="" />
        </figure>
        <div className="card-body w-4/6 overflow-y-scroll">
          <h1 className="font-bold mb-4 ">{Meal}</h1>

          {/* rating  */}

          <div className="flex">
            <span>Rating : </span>
            <div>
              <Rating
                className="text-orange-500 text-xl ml-2"
                initialRating={rating}
                fullSymbol={<BsStarFill />}
                emptySymbol={<BsStar className="mr-1" />}
              />{" "}
              <span className="mb-2 font-semibold">{rating}</span>
            </div>
          </div>

          <h3 className="border-b border-black">Ingredient For cooking</h3>
          <ul className="list-decimal ml-6">
            {Ingredient.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <div>
            <h2 className="border-b border-black mb-3"> Recipe Instruction</h2>
            <p>{Instructions}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success gap-4 w-full mt-4">
              <BsYoutube className="text-xl" />
              See Instruction in YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
