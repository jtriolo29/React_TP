import React from "react";

function Button({ value, handleButtonClick, calculateResult, clearInput }) {
  function handleClick() {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      handleButtonClick(value);
    }
  }

  const buttonColor =
    value === "C"
      ? "bg-green-400"
      : ["+", "-", "*", "/"].includes(value)
      ? "bg-blue-600"
      : "bg-blue-400";

  const buttonWidth = value === "C" ? "w-72" : "w-14";

  return (
    <button
      className={`text-white text-2xl ${buttonColor} rounded-full ${buttonWidth} h-14 
        border border-gray-500 shadow-lg`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
export default Button;
