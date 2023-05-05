import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <div className="py-10">
      <div className="md:w-3/5 px-6 mx-auto py-10 text-white text-center">
        <h1 className="mb-6">Customer Review</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eaque quo totam voluptatum minima nostrum repellendus et, incidunt vel
          necessitatibus vero fugiat voluptas eveniet vitae, itaque facilis!
          Quaerat temporibus numquam ipsa, ex vel rerum dolorem amet cupiditate
          iure molestiae ab?
        </p>
      </div>
      <div className="grid  md:grid-cols-3 gap-10 w-11/12 mx-auto">
        <ReviewCard name={"Jone Smith "} />
        <ReviewCard name={"Leo Junior "} />
        <ReviewCard name={"Amber Heart "} />
      </div>
    </div>
  );
};

export default CustomerReview;
