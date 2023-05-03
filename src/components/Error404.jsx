/* eslint-disable react/no-unescaped-entities */
import { FaHeartBroken } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import error404img from "./error404.jpg";

const Error404 = () => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col md:flex-row gap-24 h-screen px-6 md:px-14 ">
      <img className="w-full" src={error404img} alt="" />
      <div>
        <p className="text-9xl font-bold text-slate-400 text-center">Opps!</p>
        <h1 className="text-6xl text-center relative -top-3">
          404 <FaHeartBroken className="text-green-600 inline" />{" "}
          <p className="font-semibold text-2xl md:w-3/5 text-center mx-auto">
            Ooops! You weren't supposed to see this The page you're looking for
            no longer exists_ Return tothe homeo-age and you haven't seen
            anything.
          </p>
        </h1>
        <button
          onClick={() => navigation("/")}
          className="btn btn-primary block mx-auto "
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
