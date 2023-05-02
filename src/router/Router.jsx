import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../page/home/HomeLayout";
import Blog from "../page/blog/Blog";
import About from "../page/about/About";
import AllRecipesLayout from "../page/recipes/AllRecipesLayout";
import ChefRecipe from "../page/recipes/chefRecipes/ChefRecipe";
import FoodDetailsCard from "../page/recipes/FoodDetailsCard";
import AllFood from "../page/recipes/AllFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/recipes",
    element: <AllRecipesLayout />,
    children: [
      {
        path: "/recipes",
        element: <AllFood />,
        loader: ({ params }) => fetch(`http://localhost:3000/foods`),
      },
      {
        path: ":id",
        element: <FoodDetailsCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food/${params.id}`),
      },
      {
        path: "chef/:id",
        element: <ChefRecipe />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/chef/${params.id}`),
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
