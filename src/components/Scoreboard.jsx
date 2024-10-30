import React from "react";
import useGameStore from "../context/store";

const Scoreboard = () => {
  const { score } = useGameStore();
  return (
    <div className="scoreboard">
      <span>Player 1: {score.x}</span> <span> | </span>{" "}
      <span>Player 2: {score.o}</span>
    </div>
  );
};

export default Scoreboard;
