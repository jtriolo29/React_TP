import React from "react";

function DisplayGuesses({ results }) {
  return (
    <div className="text-center mt-0.5 min-h-[2in]">
      <h3 className="text-2xl font-semibold text-blue-600">Guess Results</h3>
      <div className="flex justify-center mt-2 text-purple-700">
        <ul className="list-disc list-inside text-left text-md font-semibold">
          {results.map((result, index) => (
            <li 
              key={index}
              className="font-semibold"
            >
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayGuesses;
