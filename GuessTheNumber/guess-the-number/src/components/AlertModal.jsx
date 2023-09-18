import React from "react";

function AlertModal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 
      block bg-gray-800 bg-opacity-30">
      <div className="bg-gray-700 p-5 rounded-lg shadow-lg w-1/3 border 
        border-gray-300 min-w-[20rem] text-white">
        <div text-lg mb-4>{message}</div>
        <button
          onClick={onClose}
          className="mt-2 bg-blue-600 text-white rounded-lg py-1 px-2 hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
