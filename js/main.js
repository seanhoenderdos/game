import { startGame } from './game.js';

const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');

// Register each control once; neither loading nor ending a run moves focus.
for (const button of [startButton, restartButton]) {
  // Preserve native Space activation before the document's jump handler runs.
  button.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.stopPropagation();
    }
  });

  button.addEventListener('click', () => {
    // Release the control before hiding it so gameplay keys reach the document.
    button.blur();
    startGame();
  });
}
