/**
 * Owner: Nourhan — feature/game-player.
 * Phase 0 interfaces only. Implement player mechanics on your feature branch.
 */

/** @param {() => void} onJump - Callback invoked when a jump key is pressed. */
export function setupControls(onJump) {
  // TODO (Nourhan): register keyboard controls once and call onJump.
  void onJump;
}

/** Attempt a jump; ignore the request if the player is airborne. */
export function jump() {
  // TODO (Nourhan): apply the initial jump velocity when grounded.
}

/** @param {number} deltaSeconds - Elapsed simulation time in seconds. */
export function updatePlayer(deltaSeconds) {
  // TODO (Nourhan): apply gravity, movement and ground detection.
  void deltaSeconds;
}

/** @returns {DOMRect} The player's bounds in browser viewport coordinates. */
export function getPlayerBounds() {
  // TODO (Nourhan): review this DOM query when implementing player mechanics.
  return document.getElementById('player').getBoundingClientRect();
}

/** Restore the player's initial position and velocity. */
export function resetPlayer() {
  // TODO (Nourhan): reset all player state for a new run.
}
