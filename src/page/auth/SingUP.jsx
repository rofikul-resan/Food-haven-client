/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  BsEye,
  BsEyeSlash,
  BsFacebook,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SingUP = () => {
  const [showPass, setShowPass] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSingUp = (event) => {
    event.preventDefault();
    const inputForm = event.target;
    const name = inputForm.name.value;
    const password = inputForm.password.value;
    const photoUrl = inputForm.photoUrl.value;
    const email = inputForm.email.value;
    const agreeTerms = inputForm.agreeTerms.checked;
    if (password.length >= 6) {
      setErrorMsg("");
      console.log(name, password, email, photoUrl, agreeTerms);
    } else {
      setErrorMsg("password much be 6 characters");
      toast(errorMsg);
    }
  };
  return (
    <div className="flex  h-full justify-center  overflow-hidden items-center">
      <div className="bg-black/80  w-3/6 rounded-lg p-5">
        <h1 className="text-center text-white">Register Your Account</h1>
        <form onSubmit={handleSingUp} className="text-white ">
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold italic text-xl">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold italic text-xl">Photo Url</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Your Photo"
              required
            />
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
            <button className="text-2xl border border-white rounded-full p-2 hover:text-yellow-300">
              <BsGoogle />
            </button>
            <button className="text-2xl border border-white rounded-full p-2 hover:text-yellow-300">
              <BsFacebook />
            </button>
            <button className="text-2xl border border-white rounded-full p-2 hover:text-yellow-300">
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
