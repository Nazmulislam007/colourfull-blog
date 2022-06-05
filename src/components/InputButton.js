import React from "react";

const InputButton = ({ className, children, ...rest }) => {
  return (
    <button
      className={`py-2 px-4 text-center font-bold text-white rounded transition-all ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default InputButton;
