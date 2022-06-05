import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextPorvider";
import Form from "../Form";
import InputButton from "../InputButton";
import Navbar from "../Navbar";
import TextInput from "../TextInput";

const SignUp = () => {
  const [loading, setLoading] = useState();
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

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = inputData;

    if (!username || !email || !password) return alert("fill the all data");

    try {
      setLoading(true);
      await signup(username, email, password);
      alert("Create a new account");
      setInputData({
        username: "",
        email: "",
        password: "",
      });
      setLoading(false);
    } catch (error) {
      alert("Something worng");
      console.log(error);
      setLoading(false);
    }
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
              disabled={loading}
            >
              Sign Up
            </InputButton>
          </div>
          <div className="flex flex-col">
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
