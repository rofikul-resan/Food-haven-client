import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../page/home/HomeLayout";
import Blog from "../page/blog/Blog";
import About from "../page/about/About";
import AllRecipesLayout from "../page/recipes/AllRecipesLayout";
import ChefRecipe from "../page/recipes/chefRecipes/ChefRecipe";
import FoodDetailsCard from "../page/recipes/FoodDetailsCard";
import AllFood from "../page/recipes/AllFood";
import AuthLayout from "../page/auth/AuthLayout";
import Login from "../page/auth/Login";
import SingUP from "../page/auth/SingUP";
import Error404 from "../components/Error404";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/recipes",
    element: <AllRecipesLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/recipes",
        element: <AllFood />,
        loader: () =>
          fetch(
            `https://food-heven-server-resan6231-gmailcom.vercel.app/foods`
          ),
      },
      {
        path: ":id",
        element: (
          <PrivetRouter>
            <FoodDetailsCard />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-heven-server-resan6231-gmailcom.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "chef/:id",
        element: (
          <PrivetRouter>
            <ChefRecipe />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-heven-server-resan6231-gmailcom.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sing-up",
        element: <SingUP />,
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
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
