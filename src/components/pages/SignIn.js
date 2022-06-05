import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextPorvider";
import Form from "../Form";
import InputButton from "../InputButton";
import Navbar from "../Navbar";
import TextInput from "../TextInput";

const SignIn = () => {
  const [loading, setLoading] = useState();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { login, googleSignUp } = useAuth();

  const handleForm = async (e) => {
    e.preventDefault();
    const { email, password } = inputValue;
    if (!email || !password) return alert("fill the all data");

    try {
      setLoading(true);
      await login(email, password);
      setInputValue({ email: "", password: "" });
      alert("success");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await googleSignUp();
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("error founded");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-container flex items-center justify-center mt-[-60px]">
        <Form onSubmit={handleForm}>
          <TextInput
            name="email"
            type="text"
            placeholder="email"
            label="email"
            value={inputValue.email}
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
              disabled={loading}
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
            <InputButton
              onClick={handleGoogleSubmit}
              className=" hover:bg-red-700 w-full bg-red-500"
            >
              Sign in with google
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
