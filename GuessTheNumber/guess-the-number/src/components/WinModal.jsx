import React from "react";

function WinModal({ closeModal, answer, numberOfGuesses }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 
      block bg-gray-800 bg-opacity-30">
      <div className="bg-gray-700 p-5 rounded-lg shadow-lg w-1/3 border 
        border-gray-300 min-w-[20rem] text-white">
        <h1 className="text-2xl font-bold mb-4 text-blue-400">
          Congratulations!
        </h1>
        <p className="text-lg mb-4">
          You've won the game with {numberOfGuesses} guesses.
        </p>
        <p className="text-lg mb-4 ">The answer was {answer}.</p>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold 
            py-2 px-4 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default WinModal;
