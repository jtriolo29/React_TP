import React from "react"; 


function Header(){

  return(
    <div className="text-center">
      <h1 className="text-4xl font-bold text-purple-800">Play Guess The Number!</h1>
      <h2 className="text-xl font-semibold text-blue-500 mt-2">
        Guess a random 4-digit number in as few guesses as possible!
      </h2>
    </div>
  )
}
export default Header;