import React, { useState } from "react";
import DisplayScreen from "./DisplayScreen";
import ButtonBox from "./ButtonBox";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleButtonClick(value) {
    setInput((prevInput) => prevInput + value);
  }

  function calculateResult() {
    try {
      setResult(performCalculation(input));
    } catch (e) {
      setResult("Error");
    }
  }

  function clearInput() {
    setInput("");
    setResult("");
  }

  function performCalculation(expression) {
    const operators = ["+", "-", "*", "/"];
    let numbers = [];
    let ops = [];
    let num = "";
    let lastWasOperator = true;

    // Step 1: Tokenize the expression into numbers and operators
    for (let i = 0; i < expression.length; i++) {
      let token = expression[i];

      if (!isNaN(token) || token === ".") {
        num += token; // Accumulate consecutive digits into a number
        lastWasOperator = false;
      } else if (operators.includes(token)) {
        if (lastWasOperator && (token === "+" || token === "-")) {
          // Handle signed numbers
          num += token;
        } else {
          // This is an operator following a number or another operator
          if (num !== "") {
            numbers.push(parseFloat(num)); // Push the previous number into the numbers array
          }
          ops.push(token); // Push the operator into the ops array
          num = ""; // Reset num for the next number
        }
        lastWasOperator = true;
      }
    }

    // Don't forget the last number
    if (num !== "") {
      numbers.push(parseFloat(num));
    }

    // Step 2: Calculate the result using the parsed numbers and operators
    let result = numbers[0];
    for (let i = 0; i < ops.length; i++) {
      let operator = ops[i];
      let operand = numbers[i + 1];

      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          if (operand === 0) {
            return "Error";
          }
          result /= operand;
          break;
        default:
          return "Error";
      }
    }
    return "= " + result.toFixed(2);
  }

  return (
    <div className="bg-blue-300 rounded-xl p-5 w-80">
      <DisplayScreen input={input} result={result} />
      <ButtonBox
        handleButtonClick={handleButtonClick}
        calculateResult={calculateResult}
        clearInput={clearInput}
      />
    </div>
  );
}
export default Calculator;
