import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navber = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <header>
      <nav
        className="md:flex justify-between items-center text-white text-xl
     nav-bg px-16 p py-3 relative"
      >
        {/* nav bar toggler start  */}
        <div className="absolute right-12 md:hidden">
          <label className="btn btn-circle swap swap-rotate">
            <input onClick={() => setIsNavShow(!isNavShow)} type="checkbox" />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>

        {/* nav bar toggler end  */}

        {/* nav bar start  */}
        <div className="flex items-center gap-3">
          <img className="h-16 rounded-xl" src="/food-haven-logo.png" alt="" />
          <h3>FOOD-HAVEN</h3>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-5 md:items-center ${
            !isNavShow ? "hidden md:flex" : ""
          } `}
        >
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
