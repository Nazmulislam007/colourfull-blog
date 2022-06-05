import React from "react";

const TextInput = ({ label, className, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="block text-black text-lg font-bold mb-1">{label}</label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-red-600 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
