function Word({ wordToGuess, gussedLetter, isLoser }) {
  return (
    <div className="flex gap-1 font-mono text-4xl uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <div className="border-b-2 border-black" key={index}>
          <span
            style={{
              visibility:
                gussedLetter.includes(letter) || isLoser ? "visible" : "hidden",
              color: !gussedLetter.includes(letter) && isLoser ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </div>
      ))}
      {console.log(wordToGuess)}
    </div>
  );
}

export default Word;
