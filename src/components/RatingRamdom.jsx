import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";

const RatingRamdom = () => {
  const rating = 3 + +(Math.random() * 2).toFixed(1);
  return (
    <div>
      <Rating
        className="text-orange-500 text-xl"
        initialRating={rating}
        fullSymbol={<BsStarFill />}
        emptySymbol={<BsStar className="mr-1" />}
        readonly
      />{" "}
      <span className="mb-2">{rating}</span>
    </div>
  );
};

export default RatingRamdom;
