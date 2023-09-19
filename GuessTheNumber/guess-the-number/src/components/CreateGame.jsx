import React, {useState} from "react";
import { STATUS_IN_PROGRESS } from '../utils/constants';
import ConfirmModal from "./ConfirmModal";

function CreateGame({ setAnswer, setupNewGame, gameStatus }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function genAnswer(skipCheck = false) {
    // Check if there is already a game in progress.
    if (!skipCheck && gameStatus === STATUS_IN_PROGRESS) {
      setShowConfirmModal(true);  // Show modal when game in progress
      return;
    }

    const intList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = "";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * intList.length);
      answer += intList.splice(randomIndex, 1)[0];
    }
    // Call the setAnswer function passed in from the parent component to update the state.
    setAnswer(answer);
    setupNewGame();
  }

  function handleConfirm(){
    setShowConfirmModal(false);
    genAnswer(true);
  }

  function handleCancel(){
    setShowConfirmModal(false);
  }

  return (
    <div className="text-center">
      <button
        className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
        onClick={() => genAnswer()}
      >
        Generate Number
      </button>
      <ConfirmModal
        isOpen={showConfirmModal} 
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
      <div className="text-purple-600 mt-2 font-semibold">{gameStatus}</div>
    </div>
  );
}
export default CreateGame;
