import React from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Chat from "./components/Chat.jsx";
import ResetButton from "./components/ResetButton.jsx";
import GameBoard from "./pages/GameBoard.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Scoreboard />
      <div className="game-container">
        <GameBoard player="Player 1" />
        <GameBoard player="Player 2" />
      </div>
      <div className="chat-container">
        <Chat player="Player 1" />
        <Chat player="Player 2" />
      </div>
      <ResetButton />
    </div>
  );
}

export default App;
