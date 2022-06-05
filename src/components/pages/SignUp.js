import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import Form from "../Form";
import InputButton from "../InputButton";
import Navbar from "../Navbar";
import TextInput from "../TextInput";

const SignUp = () => {
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
        <Form onSubmit={handleSubmit}>
          <TextInput
            name="username"
            value={inputData.username}
            type="text"
            placeholder="Username"
            onChange={handleInput}
            label={"Username"}
          />
          <TextInput
            className={`${classes.join("")}`}
            name="email"
            type="email"
            value={inputData.email}
            placeholder="Email"
            onChange={handleInput}
            label={"Email"}
          />
          <TextInput
            className={`${className.join("")}`}
            name="password"
            type="password"
            value={inputData.password}
            placeholder="******************"
            onChange={handleInput}
            label="Password"
          />

          <div className="mb-2">
            <InputButton
              className="bg-blue-600 hover:bg-blue-900 w-full "
              type="submit"
            >
              Sign Up
            </InputButton>
          </div>
          <div className="flex flex-col">
            <InputButton className="hover:bg-red-700 w-full bg-red-500">
              Sign up with google
            </InputButton>
            <Link
              to="/signin"
              className="mt-2 hover:text-blue-400 transition-all"
            >
              Already have an account?
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
