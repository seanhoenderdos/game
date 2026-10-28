/**
 * Owner: Sean — feature/game-controller.
 * Game state, HUD updates and animation timing. Feature integration follows later.
 */

const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const gameOverElement = document.getElementById('game-over');

// Limit a single update after a long pause, such as returning to a background tab.
const MAX_DELTA_SECONDS = 0.05;

let isRunning = false;
let score = 0;
let animationFrameId = null;
let previousTimestamp = null;

/** Start or restart a run with a clean score and one animation loop. */
export function startGame() {
  stopAnimationLoop();
  score = 0;
  isRunning = true;
  scoreElement.textContent = String(score);
  finalScoreElement.textContent = String(score);
  gameOverElement.hidden = true;

  // TODO (Sean): reset the player and obstacles when integrating their modules.
  animationFrameId = requestAnimationFrame(gameLoop);
}

/** @param {number} timestamp - requestAnimationFrame timestamp in milliseconds. */
export function gameLoop(timestamp) {
  if (!isRunning) {
    return;
  }

  // This frame is executing, so it is no longer waiting to run.
  animationFrameId = null;
  const deltaSeconds =
    previousTimestamp === null
      ? 0
      : Math.min((timestamp - previousTimestamp) / 1000, MAX_DELTA_SECONDS);
  previousTimestamp = timestamp;

  updateGame(deltaSeconds);

  // A collision may end the run during updateGame, so check before continuing.
  if (isRunning && animationFrameId === null) {
    animationFrameId = requestAnimationFrame(gameLoop);
  }
}

/** Stop the active run and show its final score. */
export function endGame() {
  if (!isRunning) {
    return;
  }

  isRunning = false;
  stopAnimationLoop();
  finalScoreElement.textContent = String(score);
  gameOverElement.hidden = false;
  gameOverElement.focus();
}

/** Cancel a pending frame and discard timing from the previous run. */
function stopAnimationLoop() {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  previousTimestamp = null;
}

/** @param {number} deltaSeconds - Elapsed simulation time in seconds. */
function updateGame(deltaSeconds) {
  // TODO (Sean): connect player/obstacle updates, scoring and collisions in Part 4.
  void deltaSeconds;
}
