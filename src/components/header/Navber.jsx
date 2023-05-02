import { Link, NavLink } from "react-router-dom";
const Navber = () => {
  return (
    <header>
      <nav
        className="flex justify-between items-center text-white text-xl
     nav-bg md:px-20 py-3"
      >
        <div className="flex items-center gap-3">
          <img className="h-16 rounded-xl" src="/food-haven-logo.png" alt="" />
          <h3>FOOD-HAVEN</h3>
        </div>
        <div className="flex gap-5 items-center ">
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to={"/"}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to={"/blog"}
          >
            {" "}
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to={"/about"}
          >
            {" "}
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to={"/recipes"}
          >
            {" "}
            Recipe
          </NavLink>
          <div>
            <Link className="btn btn-success mr-3 hover:text-white" to={""}>
              Log in
            </Link>
            <Link className="btn btn-success hover:text-white" to={""}>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
