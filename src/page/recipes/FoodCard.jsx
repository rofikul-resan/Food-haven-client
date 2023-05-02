/* eslint-disable react/prop-types */

import LazyLoad from "react-lazy-load";
import cardImg from "../../../public/slider4.jpeg";
import Rating from "react-rating";
import { BsHeart, BsHeartFill, BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const [isFavorite, setFavorite] = useState(false);
  const rating = 3 + +(Math.random() * 2).toFixed(1);
  console.log(rating);

  const handleFavorite = () => {
    setFavorite(true);
    toast("This recipe is add your Favorite List");
  };

  return (
    <LazyLoad>
      <div className="card glass text-white h-full">
        <figure>
          <img src={food.MealThumb || cardImg} alt="" />
        </figure>
        <div className="card-body justify-between">
          <h2 className="text-2xl font-bold mb-3 border-b-2 border-white pb-2">
            {food.Meal}
          </h2>
          <p className="text-sm">
            Order your favorite food from American Burger Now in Banani. Best
            food from American Burger
          </p>
          <div className="card-actions ">
            <Link to={`/recipes/${food.idMeal}`} className="btn btn-primary">
              View details
            </Link>
          </div>
        </div>
        <div className="mb-3 px-3 flex justify-between">
          <div>
            <Rating
              className="text-orange-500 text-xl"
              initialRating={rating}
              fullSymbol={<BsStarFill />}
              emptySymbol={<BsStar className="mr-1" />}
            />{" "}
            <span className="mb-2">{rating}</span>
          </div>
          <div className="flex gap-2 ">
            <p>Favorite </p>{" "}
            <button onClick={handleFavorite} disabled={isFavorite}>
              {!isFavorite ? <BsHeart /> : <BsHeartFill />}
            </button>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default FoodCard;
