import { Link, NavLink } from "react-router-dom";
const Navber = () => {
  return (
    <header>
      <nav
        className="flex justify-between items-center text-white text-xl
    font-bold nav-bg md:px-20 py-3"
      >
        <div>
          <img className="h-16 rounded-xl" src="/food-haven-logo.png" alt="" />
        </div>
        <div className="flex gap-6 ">
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
        </div>
        <div>
          <Link className="btn btn-success mr-3 hover:text-white" to={""}>
            Log in
          </Link>
          <Link className="btn btn-success hover:text-white" to={""}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
