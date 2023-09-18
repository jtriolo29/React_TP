import React from "react";
import { STATUS_START, STATUS_IN_PROGRESS } from "../utils/constants";

function MakeGuess({
  guess,
  setGuess,
  submitGuess,
  answer,
  inputRef,
  gameStatus,
  showAlertModal,
}) {
  function handleInputChange(event) {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setGuess(value);
    }
  }

  function handleSubmit() {
    if (guess.length === 4) {
      submitGuess(guess, answer);
      setGuess("");
      inputRef.current.focus();
    } else if (gameStatus === STATUS_START) {
      showAlertModal("Please start a game before submitting a guess.");
    } else {
      showAlertModal("Please enter a 4-digit number.");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="flex justify-center items-center">
      <input
        ref={inputRef}
        type="text"
        value={guess}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="border rounded-lg p-2 mr-2 text-gray-800 border-gray-800"
        placeholder="Enter 4-digit number"
        disabled={gameStatus !== STATUS_IN_PROGRESS}
      />
      <button
        className="bg-purple-800 text-white rounded-lg py-2 px-4 hover:bg-purple-900"
        onClick={handleSubmit}
      >
        Submit Guess
      </button>
    </div>
  );
}
export default MakeGuess;
