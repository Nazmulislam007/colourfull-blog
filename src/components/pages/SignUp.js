import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Navbar";

const SignUp = () => {
  const [state, setState] = useState(false);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let className = [];

  if (inputData.password.length < 6) {
    className.push("focus:outline-red-600");
  } else {
    className.push("focus:outline-green-600");
  }

  let classes = [];

  if (inputData.email.includes("@")) {
    classes.push("focus:outline-green-600");
  } else {
    classes.push("focus:outline-red-600");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputData.username || !inputData.email || !inputData.password)
      return alert("fill the all data");

    setInputData({
      username: "",
      email: "",
      password: "",
    });
    alert("successfull");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="signin-container flex items-center justify-center mt-[-60px]">
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-[320px] w-full shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-black text-lg font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-red-600"
              name="username"
              value={inputData.username}
              type="text"
              placeholder="Username"
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-lg font-bold mb-2">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight ${classes.join(
                ""
              )}`}
              name="email"
              type="email"
              value={inputData.email}
              placeholder="Email"
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label className="block text-black text-lg font-bold mb-2">
              Password
            </label>
            <input
              className={`shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3 leading-tight ${className.join(
                ""
              )}`}
              name="password"
              type="password"
              value={inputData.password}
              placeholder="******************"
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <button
              className="bg-blue-600 hover:bg-blue-900 text-white w-full text-center font-bold py-2 px-4 rounded focus-within:shadow-outline transition-all"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col">
            <button className="py-2 px-4 text-center transition-all hover:bg-red-700 w-full bg-red-500 rounded text-white">
              Sign up with google
            </button>
            <Link
              to="/signin"
              className="mt-2 hover:text-blue-400 transition-all"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
