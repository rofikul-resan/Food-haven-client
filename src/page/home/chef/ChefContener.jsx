import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefContener = () => {
  const [allChef, setAllChef] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chef")
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);
  return (
    <div className=" py-20 px-10 ">
      <div className="w-3/5 mx-auto text-white mb-8 text-center">
        <h1 className="mb-4">Our Famous Chef</h1>
        <p>
          A chef is a professional cook and tradesman who is proficient in all
          aspects of food ... News from Wikinews. Quotations from Wikiquote.
        </p>
      </div>
      <div>
        {allChef.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefContener;
