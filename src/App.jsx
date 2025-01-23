import { useState } from "react";
import Drawing from "./components/drawing";
import Keyboard from "./components/keyboard";
import Status from "./components/status";
import Word from "./components/word";
import { generate, count } from "random-words";

function App() {
  const [wordToGuess] = useState(generate({ minLength: 5, maxLength: 5 }));
  const [gussedLetter, setGussedLetter] = useState([]);
  const incorrectLetter = gussedLetter.filter(
    (latter) => !wordToGuess.includes(latter)
  );
  const addGuessedLatter = (latter) => {
    if (gussedLetter.includes(latter) || isLoser || isWinner) {
      return;
    }
 
    setGussedLetter((prev) => [...prev, latter]);
  };
  const isLoser = incorrectLetter.length ==6
  const isWinner = wordToGuess.split('').every(latter=> gussedLetter.includes(latter))

  return (
    <div className=" flex w-screen h-screen select-none ">
      <div className=" flex flex-col  w-3/6  h-full justify-evenly items-center mx-auto   ">
        <Status isLoser={isLoser} isWinner={isWinner} />
        <Drawing guessCount={incorrectLetter.length} />
         <Word wordToGuess={wordToGuess}  gussedLetter={gussedLetter} isLoser={isLoser} /> 
        <div id="keyboardWrapper" className=" self-stretch">
          <Keyboard addGuessedLatter={addGuessedLatter} disabled={isLoser || isWinner} />
        </div>
      </div>
    </div>
  );
}

export default App;
