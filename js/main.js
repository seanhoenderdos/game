import { startGame } from './game.js';

const restartButton = document.getElementById('restart-btn');
const gameTitle = document.querySelector('.game-title');

// Register this once, so restarting never adds another click listener.
restartButton.addEventListener('click', () => {
  startGame();
  gameTitle.focus();
});

startGame();
