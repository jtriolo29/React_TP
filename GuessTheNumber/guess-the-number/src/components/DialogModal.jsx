import React from "react";
import "./App.css";

export function DialogButton({ children, backgroundColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor }}
      className="m-4 bg-blue-600 text-white rounded-lg py-1 px-2 hover:bg-blue-700"
    >
      {children}
    </button>
  );
}

export function Alert({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 block bg-gray-800 bg-opacity-30">
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg w-1/3 border border-gray-300 min-w-[20rem] text-white">
          <div className="text-lg mb-4">{children}</div>
        </div>
      </div>
    </>
  );
}
