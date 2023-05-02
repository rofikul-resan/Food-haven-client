import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../page/home/HomeLayout";
import Blog from "../page/blog/Blog";
import About from "../page/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
