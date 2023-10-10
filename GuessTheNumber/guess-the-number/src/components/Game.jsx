import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import CreateGame from "./CreateGame";
import MakeGuess from "./MakeGuess";
import DisplayGuesses from "./DisplayGuesses";
import { DialogButton, Alert } from "./DialogModal";
import { STATUS_START, STATUS_IN_PROGRESS } from "../utils/constants";

function Game() {
  const [answer, setAnswer] = useState("");
  const [guess, setGuess] = useState("");
  const [results, setResults] = useState([]);
  const [gameStatus, setGameStatus] = useState(STATUS_START);
  const [showWinModal, setWinShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [finalGuessCount, setFinalGuessCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (gameStatus === STATUS_IN_PROGRESS) {
      inputRef.current.focus();
    }
  }, [gameStatus]);

  function setupNewGame() {
    setGameStatus(STATUS_IN_PROGRESS);
    setResults([]);
    setGuess("");
  }

  function submitGuess(submittedGuess, answer) {
    let exact = 0;
    let partial = 0;
    let colorizedGuess = [];

    for (let i = 0; i < 4; i++) {
      if (submittedGuess.charAt(i) === answer.charAt(i)) {
        exact++;
        colorizedGuess.push(
          <span style={{ color: "#7DCEA0" }} key={i}>
            {submittedGuess.charAt(i)}
          </span>
        );
      } else if (answer.includes(submittedGuess.charAt(i))) {
        partial++;
        colorizedGuess.push(
          <span style={{ color: "#E74C3C" }} key={i}>
            {submittedGuess.charAt(i)}
          </span>
        );
      } else {
        colorizedGuess.push(<span key={i}>{submittedGuess.charAt(i)}</span>);
      }
    }

    const result = {
      text: `Exact: ${exact} Partial: ${partial}`,
      guess: colorizedGuess,
    };

    //  Make copy with spread operator and update copy
    const newResults = [...results, result];
    setResults(newResults);

    // Check for winner
    if (exact === 4) {
      setFinalGuessCount(newResults.length);
      setWinShowModal(true);     
      setGameStatus(STATUS_START);
      setResults([]);
    }
  }

  function showAlertModal(message) {
    setAlertMessage(message);
    setShowAlert(true);
  }

  function resetGame() {
    setGameStatus(STATUS_START);
    setResults([]);
    setGuess("");
    setAnswer("");
  }

  return (
    <div
      className="w-1/3 min-w-[450px] bg-violet-200 rounded-lg border 
        border-gray-800 p-4 flex flex-col"
    >
      <Header />
      <div className="mt-4 bg-violet-100 rounded-lg border border-gray-800 p-4">
        <CreateGame
          setAnswer={setAnswer}
          setupNewGame={setupNewGame}
          gameStatus={gameStatus}
          showAlertModal={showAlertModal}
        />
      </div>
      <div className="mt-4 bg-violet-100 rounded-lg border border-gray-800 p-4">
        <MakeGuess
          guess={guess}
          setGuess={setGuess}
          submitGuess={submitGuess}
          answer={answer}
          inputRef={inputRef}
          gameStatus={gameStatus}
          showAlertModal={showAlertModal}
        />
      </div>
      <div className="mt-4 bg-violet-100 rounded-lg border border-gray-800 p-1">
        <DisplayGuesses results={results} />
      </div>
      <div className="mt-4 self-end">
        <button
          className="bg-violet-700 text-white rounded-lg py-1 px-2 
            text-xs hover:bg-violet-800 mb-4 mr-4"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
      {showAlert && (
        <Alert>
          <div className="text-center p-4">{alertMessage}</div>
          <DialogButton onClick={() => setShowAlert(false)}>OK</DialogButton>
        </Alert>
      )}
      {showWinModal && (
        <Alert>
          Congratulations!
          <p className="text-lg mb-4">
            You've won the game with {finalGuessCount} guesses.
          </p>
          <p className="text-lg mb-4">The answer was {answer}.</p>
          <DialogButton
            onClick={() => {
              setWinShowModal(false);
              setAnswer("");
            }}
          >
            Close
          </DialogButton>
        </Alert>
      )}

      {/* <div className="text-center text-xs">
        <p>Debug Answer: {answer}</p>
        <p>Debug Guess: {guess}</p>
      </div> */}
    </div>
  );
}
export default Game;
