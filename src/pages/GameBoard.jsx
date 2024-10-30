import React, { useEffect } from "react";
import useGameStore from "../context/store";
import "../styles/GameBoard.css";

const GameBoard = ({ player }) => {
  const { board, makeMove, gameResult, currentPlayer, resetGame } =
    useGameStore();
  const isDisabled = currentPlayer !== player || gameResult;

  useEffect(() => {
    if (gameResult) {
      const timer = setTimeout(() => resetGame(), 5000);
      return () => clearTimeout(timer);
    }
  }, [gameResult, resetGame]);

  return (
    <div className={`game-board ${isDisabled ? "disabled" : ""}`}>
      <h2>{gameResult || `${player}'s Turn`}</h2>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => !isDisabled && makeMove(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
