import React from "react";

const Form = ({ children, ...rest }) => {
  return (
    <form
      className="bg-white max-w-[320px] w-full shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
