import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="signin-container flex items-center justify-center mt-[-60px]">
        <form className="bg-white max-w-[320px] w-full shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black text-lg font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-red-600"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-2">
            <label className="block text-black text-lg font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-red-600"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus-within:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-700"
              to="/reset"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mb-2">
            <button className="py-2 px-4 text-center transition-all hover:bg-red-700 w-full bg-red-500 rounded text-white">
              Sign up with google
            </button>
          </div>
          <Link
            to="/signup"
            className="text-center mt-2 hover:text-blue-400 transition-all"
          >
            Don't have an account?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
