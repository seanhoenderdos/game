/**
 * Owner: Sean — feature/game-controller.
 * Game state and HUD updates. Animation and feature integration follow later.
 */

const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const gameOverElement = document.getElementById('game-over');

let isRunning = false;
let score = 0;

/** Start or restart a run with a clean score and a hidden game-over panel. */
export function startGame() {
  score = 0;
  isRunning = true;
  scoreElement.textContent = String(score);
  finalScoreElement.textContent = String(score);
  gameOverElement.hidden = true;

  // TODO (Sean): reset player/obstacles and start the animation loop in later parts.
}

/** @param {number} timestamp - requestAnimationFrame timestamp in milliseconds. */
export function gameLoop(timestamp) {
  // TODO (Sean): derive deltaSeconds and coordinate updates, collision and score.
  void timestamp;
}

/** Mark the active run as finished and show its final score. */
export function endGame() {
  if (!isRunning) {
    return;
  }

  isRunning = false;
  finalScoreElement.textContent = String(score);
  gameOverElement.hidden = false;
  gameOverElement.focus();

  // TODO (Sean): cancel the animation frame when the loop is implemented.
}
