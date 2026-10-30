import { startGame } from './game.js';

const restartButton = document.getElementById('restart-btn');

// Let the focused button use Space normally without triggering the jump handler.
restartButton.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.stopPropagation();
  }
});

// Register this once, so restarting never adds another click listener.
restartButton.addEventListener('click', () => {
  // Release the control before it is hidden; gameplay keys need no heading focus.
  restartButton.blur();
  startGame();
});

startGame();
