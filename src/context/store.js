import { create } from "zustand";

const useGameStore = create((set) => ({
  board: Array(9).fill(null),
  currentPlayer: "Player 1",
  score: { x: 0, o: 0 },
  chat: [],
  gameResult: null,

  makeMove: (index) =>
    set((state) => {
      if (state.board[index] || state.gameResult) return state;

      const newBoard = [...state.board];
      const playerSymbol = state.currentPlayer === "Player 1" ? "X" : "O";
      newBoard[index] = playerSymbol;

      const result = checkWin(newBoard);
      const nextPlayer =
        state.currentPlayer === "Player 1" ? "Player 2" : "Player 1";

      return {
        board: newBoard,
        gameResult: result
          ? `${result} Wins!`
          : result === null && newBoard.every(Boolean)
          ? "Draw!"
          : null,
        currentPlayer: result ? state.currentPlayer : nextPlayer,
        score:
          result === "X"
            ? { ...state.score, x: state.score.x + 1 }
            : result === "O"
            ? { ...state.score, o: state.score.o + 1 }
            : state.score,
      };
    }),

  resetGame: () =>
    set({
      board: Array(9).fill(null),
      gameResult: null,
      currentPlayer: "Player 1",
    }),

  resetAction: () =>
    set({
      board: Array(9).fill(null),
      gameResult: null,
      currentPlayer: "Player 1",
      score: { x: 0, o: 0 },
      chat: [],
    }),

  sendMessage: (message, player) =>
    set((state) => ({
      chat: [...state.chat, { message, player }],
    })),
}));

// Helper function to check for winning condition
const checkWin = (board) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default useGameStore;
