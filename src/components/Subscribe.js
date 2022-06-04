import React from "react";
import classes from "../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <div className={classes.subscribe}>
        <h2>Subscribe to Grace is Home</h2>
        <p>Sign in if you have an account</p>
        <button className="btn btn--red">Sign In</button>
      </div>
    </>
  );
};

export default Subscribe;
