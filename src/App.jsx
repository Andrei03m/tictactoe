import ResetButton from "./components/ResetButton.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import GameBoard from "./pages/GameBoard.jsx";

function App() {
  return (
    <div className="app">
      <Scoreboard />
      <div className="game-container">
        <GameBoard player="Player 1" />
        <GameBoard player="Player 2" />
      </div>
      <ResetButton />
    </div>
  );
}

export default App;
