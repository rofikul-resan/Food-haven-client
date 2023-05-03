/* eslint-disable react/prop-types */
import RatingRamdom from "../../../components/RatingRamdom";

const ReviewCard = ({ name }) => {
  return (
    <div className="bg-white card px-4 py-2">
      <img
        className="h-28 rounded-full mx-auto border-[5px] border-yellow-500 p-2"
        src={"/pfl-demo.jpg"}
        alt=""
      />
      <div className="text-center mb-4">
        <h2 className="mb-3">{name}</h2>
        <p>
          I was so impressed with my breakfast this morning! I tried the Fried
          Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We
          both finished our whole plates.
        </p>
      </div>
      <div className="flex gap-1 mb-5">
        <p className="font-bold"> Rating :</p>
        <RatingRamdom />
      </div>
    </div>
  );
};

export default ReviewCard;
