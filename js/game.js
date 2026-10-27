/**
 * Owner: Sean — feature/game-controller.
 * Phase 0 interfaces only. Implement the controller on your feature branch.
 */

/** Start or restart a run, reset state and schedule one animation loop. */
export function startGame() {
  // TODO (Sean): connect controls, reset modules, score and game-over UI.
}

/** @param {number} timestamp - requestAnimationFrame timestamp in milliseconds. */
export function gameLoop(timestamp) {
  // TODO (Sean): derive deltaSeconds and coordinate updates, collision and score.
  void timestamp;
}

/** Stop the active run and show its final score. */
export function endGame() {
  // TODO (Sean): cancel animation, stop updates and show the game-over panel.
}
