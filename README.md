Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with React.js and Zustand for state management, designed with a responsive and interactive UI, and hosted on GitHub Pages.

Live Demo

Try out the live version of the game here: [Tic-Tac-Toe on GitHub Pages](https://andrei03m.github.io/tictactoe/)

Table of Contents

    Features
    Technologies Used
    Installation
    Usage
    Game Rules
    Project Structure

Features

    Turn-Based Gameplay: Each player can make a move only on their turn.
    Dynamic UI Update: Both players' boards update simultaneously in real-time.
    Scoreboard: Keeps track of each player's score.
    Game Result Display: Shows the game result (win, lose, or draw) and automatically resets after 5 seconds.
    Reset Button: Allows players to reset the game, clearing the board.
    Chat Feature: Players can chat with each other during the game.
    Responsive Design: Adjusts to various screen sizes for a better user experience on different devices.

Technologies Used

    React.js: A JavaScript library for building user interfaces.
    Zustand: A minimal, unopinionated state management library for React.
    CSS3: Custom styling for an interactive and visually appealing design.
    GitHub Pages: For hosting the live demo of the game.

Installation

    Clone the repository:
    git clone https://github.com/andrei03m/tictactoe.git

    Navigate to the project directory:
    cd tictactoe

    Install dependencies:
    npm install

    Run the app locally:
    npm start

    The app should now be running on http://localhost:3000.

Usage

    Open the game, and each player should take turns clicking on the grid to mark "X" or "O".
    The board will automatically disable for the player who isn’t currently taking a turn.
    The result (win, lose, or draw) will display at the end of each game, and scores will update accordingly.
    Use the reset button to start a new round and clear the chat history.

Game Rules

    Objective: Get three of your symbols in a row, column, or diagonal.
    Turn-Based Play: Only one player can play at a time. The board will indicate when it’s your turn.
    Win Conditions: The game is won if a player gets three symbols in a row, column, or diagonal. A tie occurs if the board fills up without a winner.

Project Structure

tictactoe/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── GameBoard.js
│ │ └── Chat.js
│ ├── context/
│ │ └── store.js
│ ├── styles/
│ │ └── styles.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

    components/: Contains React components for the game board and chat.
    context/: Holds Zustand store for global state management.
    styles/: Contains the main CSS file for styling.
