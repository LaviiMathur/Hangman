import React, { useEffect } from "react";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],

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
    <div className="grid gap-y-3 md:w-full ">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-3 w-11/12 md:w-full mx-auto">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              onClick={() => addGuessedLatter(key.toLowerCase())}
              disabled={disabled}
              aria-disabled={disabled}
              className={`w-8 h-8 md:w-16 md:h-16 border-4 border-black hover:bg-slate-400 active:bg-slate-500 active:scale-105 font-medium text-lg md:text-2xl ${
                disabled ? "bg-slate-800 hover:bg-slate-800" : "bg-white"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
