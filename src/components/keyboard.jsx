import React, { useEffect } from "react";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard({ addGuessedLatter, disabled }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key.match(/^[a-z]$/)) {
        e.preventDefault();
        addGuessedLatter(key);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [addGuessedLatter, disabled]);

  return (
    <div className="grid md:grid-cols-auto-fit grid-cols-5 gap-1">
      {KEYS.map((key, index) => (
        <button
          key={index}
          onClick={() => addGuessedLatter(key)}
          disabled={disabled}
          className={`border-4 aspect-square border-black hover:bg-slate-400 active:scale-110 font-medium text-2xl ${
            disabled ? "bg-slate-800 active:scale-0  hover:bg-slate-800" : "bg-transparent "
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
