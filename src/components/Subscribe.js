import React from "react";
import classes from "../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <div className={classes.subscribe}>
        <h2>Subscribe to Grace is Home</h2>
        <p>Sign up if you don't have an account</p>
        <button className="btn btn--red">Sign Up</button>
      </div>
    </>
  );
};

export default Subscribe;
