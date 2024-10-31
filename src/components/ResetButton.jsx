import React from "react";
import useGameStore from "../context/store";

const ResetButton = () => {
  const resetGame = useGameStore((state) => state.resetAction);

  return (
    <button className="reset-button" onClick={resetGame}>
      Reset
    </button>
  );
};

export default ResetButton;
