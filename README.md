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
├── build/ # Build output folder for deployment
├── node_modules/ # Node modules (auto-generated)
├── public/ # Public files accessible by the app
│ ├── index.html # Main HTML file
│ └── favicon.ico # Favicon for the app
├── src/ # Main source folder
│ ├── components/ # Reusable components
│ │ ├── Chat.jsx # Chat component for player communication
│ │ ├── ResetButton.jsx # Button to reset game, score, and chat
│ │ └── Scoreboard.jsx # Component to display the score
│ ├── context/ # State management with Zustand
│ │ └── store.js # Zustand store for managing game state
│ ├── pages/ # Main game pages
│ │ └── GameBoard.jsx # Game board component with main game logic
│ ├── styles/ # Styles for the app
│ │ ├── App.css # General app styles
│ │ └── GameBoard.css # Styles specific to the game board
│ ├── App.jsx # Main app component
│ ├── App.test.js # Test file for the App component
│ ├── index.css # Additional global styles
│ ├── index.js # Entry point for React app
│ ├── reportWebVitals.js # Web vitals reporting for performance
│ └── setupTests.js # Test setup file for Jest
├── .gitignore # Files and directories to ignore in Git
├── package-lock.json # Auto-generated file with exact dependency version
├── package.json # Project metadata and dependencies
└── README.md # Project README with description and
