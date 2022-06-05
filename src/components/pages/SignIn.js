import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form";
import InputButton from "../InputButton";
import Navbar from "../Navbar";
import TextInput from "../TextInput";

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const { username, password } = inputValue;
    if (!username || !password) return alert("fill the all data");
    setInputValue({
      username: "",
      password: "",
    });
    alert("success");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="signin-container flex items-center justify-center mt-[-60px]">
        <Form onSubmit={handleForm}>
          <TextInput
            name="username"
            type="text"
            placeholder="Username"
            label="Username"
            value={inputValue.username}
            onChange={handleInput}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            value={inputValue.password}
            placeholder="******************"
            onChange={handleInput}
          />

          <div className="mb-2 flex items-center justify-between">
            <InputButton
              className="bg-blue-600 hover:bg-blue-900"
              type="submit"
            >
              Sign In
            </InputButton>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-700"
              to="/reset"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mb-2">
            <InputButton className=" hover:bg-red-700 w-full bg-red-500">
              Sign up with google
            </InputButton>
          </div>
          <Link
            to="/signup"
            className="text-center mt-2 hover:text-blue-400 transition-all"
          >
            Don't have an account?
          </Link>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
