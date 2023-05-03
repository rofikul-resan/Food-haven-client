/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import "./authLayout.css";
import {
  BsEye,
  BsEyeSlash,
  BsFacebook,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { login, setLoading, googleSingIn, facebookSingIn, githubSingIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const inputForm = event.target;
    const email = inputForm.email.value;
    const password = inputForm.password.value;
    if (password.length >= 6) {
      setErrorMsg("");
      login(email, password)
        .then(() => {
          navigate("/");
          inputForm.reset();
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.errorMessage;
          toast(errorMessage);
        });
    } else {
      setErrorMsg("password much be 6 characters");
    }
  };

  const handleGoogleLogIn = () => {
    googleSingIn()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  const handleFacebookLogIn = () => {
    facebookSingIn()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  const handleGithubLogIn = () => {
    githubSingIn()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  return (
    <div className="flex  h-full justify-center  overflow-hidden items-center">
      <div className="bg-black/80  w-3/6 rounded-lg p-5">
        <h1 className="text-center text-white">Log in</h1>
        <form onSubmit={handleLogIn} className="text-white ">
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold italic text-xl">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className=" font-semibold italic text-xl">Password</span>
            </label>
            <div
              className="absolute z-10 right-6 bottom-[40%]"
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? <BsEye /> : <BsEyeSlash />}
            </div>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Your Password"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="text-sm hover:underline hover:text-white">
                Forgot password?
              </a>
            </label>
          </div>

          {errorMsg && (
            <p className="text-xs form-control text-red-600 font-semibold">
              {errorMsg}
            </p>
          )}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="text-center">
            Don't Have an account ?{" "}
            <Link to={"/auth/sing-up"} className="link ">
              Register
            </Link>{" "}
          </p>
        </form>
        <div className="border border-white relative my-12">
          <p className="bg-black absolute border p-3 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-white w-fit text-center text-white">
            or
          </p>
        </div>
        <div className="text-white/80 text-center">
          <h1>Log in with</h1>
          <div className="flex w-1/2 mx-auto justify-evenly my-8">
            <button
              onClick={handleGoogleLogIn}
              className="text-2xl border border-white rounded-full p-2 hover:text-yellow-300"
            >
              <BsGoogle />
            </button>
            <button
              onClick={handleFacebookLogIn}
              className="text-2xl border border-white rounded-full p-2 hover:text-yellow-300"
            >
              <BsFacebook />
            </button>
            <button
              onClick={handleGithubLogIn}
              className="text-2xl border border-white rounded-full p-2 hover:text-yellow-300"
            >
              <BsGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
