import React from "react";

function DisplayScreen({ input, result }) {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-t-xl mb-4 border border-gray-600">
      <p className="text-2xl h-8 mb-2">{result}</p>
      <p className="text-xl h-6">{input}</p>
    </div>
  );
}
export default DisplayScreen;
