import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <div className={classes.subscribe}>
        <h2>Subscribe to Grace is Home</h2>
        <p>Sign in if you have an account</p>
        <Link to="/signin" className="btn btn--red">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default Subscribe;
