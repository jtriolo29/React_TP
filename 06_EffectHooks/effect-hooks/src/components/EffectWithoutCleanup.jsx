import { useEffect, useState } from "react";

function EffectWithoutCleanup() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style = `background-color: ${color};`;
  }, [color]);

  return (
    <div>
      <h1>Effect Without Cleanup</h1>
      <h2>An effect without cleanup is an effect that we can run and forget.</h2>
      <h3 className="text-center mt-4 mb-20 text-5xl">Select a Background Color:</h3>
      <div className="flex justify-center space-x-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded text-6xl "
          onClick={() => {
            setColor("lightgreen");
          }}
        >
          Light Green
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded text-6xl "
          onClick={() => {
            setColor("lightcoral");
          }}
        >
          Light Coral
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded text-6xl "
          onClick={() => {
            setColor("lightcyan");
          }}
        >
          Light Cyan
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded text-6xl "
          onClick={() => {
            setColor("white");
          }}
        >
          White
        </button>
      </div>
    </div>
  );
}
export default EffectWithoutCleanup;