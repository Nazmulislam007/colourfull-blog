import React from "react";

const Button = ({ className, children, ...rest }) => {
  return (
    <>
      <button className={`btn ${className}`} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
