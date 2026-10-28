/**
 * Owner: Nourhan — feature/game-player.
 * Player controls and movement mechanics.
 */

const JUMP_VELOCITY = 620;
const GRAVITY = 1800;
const MAX_DELTA_SECONDS = 0.05;

let verticalVelocity = 0;
let jumpHeight = 0;
let isGrounded = true;
let controlsRegistered = false;
let jumpCallback = null;

/** @param {() => void} onJump - Callback invoked when a jump key is pressed. */
export function setupControls(onJump) {
  jumpCallback = onJump;

  if (controlsRegistered) {
    return;
  }

  document.addEventListener('keydown', (event) => {
    const isJumpKey = event.code === 'Space' || event.code === 'ArrowUp';

    if (!isJumpKey || event.repeat) {
      return;
    }

    event.preventDefault();
    jumpCallback?.();
  });

  controlsRegistered = true;
}

/** Attempt a jump; ignore the request if the player is airborne. */
export function jump() {
  if (!isGrounded) {
    return;
  }

  verticalVelocity = JUMP_VELOCITY;
  isGrounded = false;
}

/** @param {number} deltaSeconds - Elapsed simulation time in seconds. */
export function updatePlayer(deltaSeconds) {
  const player = document.getElementById('player');

  if (!player || isGrounded) {
    return;
  }

  if (!Number.isFinite(deltaSeconds) || deltaSeconds < 0) {
    return;
  }

  const elapsed = Math.min(deltaSeconds, MAX_DELTA_SECONDS);

  verticalVelocity -= GRAVITY * elapsed;
  jumpHeight += verticalVelocity * elapsed;

  if (jumpHeight <= 0) {
    jumpHeight = 0;
    verticalVelocity = 0;
    isGrounded = true;
  }

  player.style.transform = `translateY(${-jumpHeight}px)`;
}

/** @returns {DOMRect | null} Player bounds, or null if the player is missing. */
export function getPlayerBounds() {
  const player = document.getElementById('player');

  return player ? player.getBoundingClientRect() : null;
}

/** Restore the player's initial position and velocity. */
export function resetPlayer() {
  verticalVelocity = 0;
  jumpHeight = 0;
  isGrounded = true;

  const player = document.getElementById('player');

  if (player) {
    player.style.transform = 'translateY(0px)';
  }
}
