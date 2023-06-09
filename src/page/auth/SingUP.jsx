/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { ScaleLoader } from "react-spinners";
import {
  BsEye,
  BsEyeSlash,
  BsFacebook,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const SingUP = () => {
  const [showPass, setShowPass] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const [logInReq, setlogInReq] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {
    singUP,
    updateUserData,
    googleSingIn,
    facebookSingIn,
    githubSingIn,
    setLoading,
  } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state;
  console.log(errorMsg);

  const handleSingUp = (event) => {
    setlogInReq(true);
    event.preventDefault();
    const inputForm = event.target;
    const name = inputForm.name.value || null;
    const password = inputForm.password.value;
    const photoUrl = inputForm.photoUrl.value || null;
    const email = inputForm.email.value;
    if (password.length >= 6) {
      setErrorMsg("");
      singUP(email, password)
        .then(() => {
          setlogInReq(false);
          updateUserData(name, photoUrl)
            .then(() => {
              navigate(from || "/");
              toast.success("sing up successful");
            })
            .catch((e) => toast(e.message));
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
          toast(errorMessage);
          setlogInReq(false);
        });
    } else {
      setErrorMsg("password much be 6 characters");
      toast(errorMsg);
    }
  };

  const handleGoogleLogIn = () => {
    googleSingIn()
      .then(() => {
        navigate(from || "/");
      })
      .catch(() => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  const handleFacebookLogIn = () => {
    facebookSingIn()
      .then(() => {
        navigate(from || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  const handleGithubLogIn = () => {
    githubSingIn()
      .then(() => {
        navigate(from || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  return (
    <div className="flex  h-full justify-center  overflow-hidden items-center">
      {logInReq && (
        <div className="absolute h-full w-full md:inset-0 flex justify-center items-center z-20 bg-black/75">
          <ScaleLoader color="#fff" />
        </div>
      )}
      <div className="bg-black/80  md:w-3/6 w-full md:rounded-lg p-5">
        <h1 className="text-center text-white">Register Your Account</h1>
        <form onSubmit={handleSingUp} className="text-white ">
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold italic text-xl">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Name" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold italic text-xl">Photo Url</span>
            </label>
            <input type="text" name="photoUrl" placeholder="Your Photo" />
          </div>
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
              className="absolute z-10 right-6 bottom-[14%]"
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
          </div>

          {errorMsg && (
            <p className="text-xs form-control text-red-600 font-semibold">
              {errorMsg}
            </p>
          )}

          <div className="form-control flex-row gap-2 items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              className="checkbox-primary checkbox checkbox-xs"
              onChange={(e) => setBtnSubmit(e.target.checked)}
            />
            <label className="">
              I agree all statements in{" "}
              <span className="link text-violet-600">Terms of service</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-success disabled:bg-red-500 disabled:text-black/50"
              disabled={!btnSubmit}
            >
              Register
            </button>
          </div>
          <p className="text-center">
            Already Have an account ?{" "}
            <Link to={"/auth/login"} className="link hover:link-primary ">
              Log in
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
      <ToastContainer className="foo" style={{ width: "80%" }} />
    </div>
  );
};

export default SingUP;
