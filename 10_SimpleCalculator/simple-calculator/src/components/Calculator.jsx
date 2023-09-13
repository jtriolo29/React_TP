import React from "react";
import ButtonBox from "./ButtonBox";
import DisplayScreen from "./DisplayScreen";
import { useState } from "react";

export default function Calculator() {
  const [exprString, setExprString] = useState("");
  const [displayResult, setDisplayResult] = useState("");

  return (
    <div>
      <DisplayScreen 
        exprString={exprString} 
        displayResult={displayResult} 
      />
      <ButtonBox
        setExprString={setExprString}
        setDisplayResult={setDisplayResult}
        exprString={exprString}
      />
    </div>
  );
}
