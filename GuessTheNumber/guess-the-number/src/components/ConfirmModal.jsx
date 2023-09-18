import React from 'react';

function ConfirmModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 
      block bg-gray-800 bg-opacity-30">
      <div className="bg-gray-700 p-5 rounded-lg shadow-lg w-1/3 border 
        border-gray-300 min-w-[20rem] text-white">
        <h1 className="text-xl font-bold mb-4">Confirmation</h1>
        <p className="text-lg mb-4">
          There is already a game in process. Are you sure you want to start a new game?
        </p>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold 
            py-2 px-4 rounded mr-2"
          onClick={onCancel}
        >
          No
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={onConfirm}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
