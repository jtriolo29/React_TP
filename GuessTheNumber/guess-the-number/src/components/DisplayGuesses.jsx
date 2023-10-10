import React from "react";

function DisplayGuesses({ results }) {
  return (
    <div className="text-center mt-0.5 min-h-[2in]">
      <h3 className="text-x1 font-semibold text-violet-700">
        Exact Matches Are Green & Partial Matches Are Red
      </h3>
      <div className="flex justify-start mt-2 text-gray-700">
        <ul className="list-disc list-inside text-left font-semibold pl-5">
          {results.map((result, index) => (
            <li key={index} className="font-semibold text-x1 preserve-spaces">
              Guess: {result.guess}    {result.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayGuesses;
