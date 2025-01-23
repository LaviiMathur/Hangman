function Status({ isLoser, isWinner }) {
  return (
    <div className="font-serif text-xl">
      {Boolean(isLoser) && <p className="text-red-500">You Lost! Try Again!</p>}
        {isWinner && <p className="text-green-500">Congratulations, You Won!</p>}
    </div>
  );
}

export default Status;
