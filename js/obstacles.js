/**
 * Owner: Nkheso — feature/game-obstacles.
 * Phase 0 interfaces only. Implement obstacles on your feature branch.
 */

/** Create and track a new obstacle inside #obstacle-layer. */
export function spawnObstacle() {
  // TODO (Nkheso): create an obstacle and add it to the tracked collection.
}

/**
 * @param {number} deltaSeconds - Elapsed simulation time in seconds.
 * @returns {number} Newly passed obstacles in this update, each counted once.
 */
export function updateObstacles(deltaSeconds) {
  // TODO (Nkheso): move obstacles, count passes and remove off-screen obstacles.
  void deltaSeconds;
  return 0;
}

/**
 * @param {DOMRect} playerBounds - Player bounds in browser viewport coordinates.
 * @returns {boolean} Whether the player overlaps an obstacle.
 */
export function checkCollision(playerBounds) {
  // TODO (Nkheso): compare player and obstacle bounding rectangles.
  void playerBounds;
  return false;
}

/** Remove all obstacle elements and reset obstacle state. */
export function resetObstacles() {
  // TODO (Nkheso): clear tracked obstacles and reset spawn timing.
}
