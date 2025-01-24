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
  {console.log(wordToGuess)}
  return (
    <div className=" flex w-screen h-screen select-none ">
      <div className=" flex flex-col  md:w-4/5  h-full justify-evenly items-center mx-auto  text-center relative">
      <button hidden={isLoser || isWinner ? false : true} onClick={()=>location.reload()} className=" absolute right-0 top-0 h-10 w-10"><span className="font-bold text-5xl">&#x21bb;</span></button>
      <heading className='text-4xl text-center  md:text-7xl font-serif font-thin'>Hangman Game</heading>
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
