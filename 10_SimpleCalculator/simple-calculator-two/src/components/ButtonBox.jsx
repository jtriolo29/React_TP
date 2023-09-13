import React from "react";
import Button from "./Button";

function ButtonBox({ handleButtonClick, calculateResult, clearInput }) {
  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", ".", "=", "/",
    "C",
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {buttons.map((button, index) => (
        <Button
          key={index}
          value={button}
          handleButtonClick={handleButtonClick}
          calculateResult={calculateResult}
          clearInput={clearInput}
        />
      ))}
    </div>
  );
}
export default ButtonBox;
