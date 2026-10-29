import { startGame } from './game.js';

const restartButton = document.getElementById('restart-btn');
const gameTitle = document.querySelector('.game-title');

// Let the focused button use Space normally without triggering the jump handler.
restartButton.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.stopPropagation();
  }
});

// Register this once, so restarting never adds another click listener.
restartButton.addEventListener('click', () => {
  startGame();
  gameTitle.focus();
});

startGame();
