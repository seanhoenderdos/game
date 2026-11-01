/**
 * Owner: Nkheso — feature/game-obstacles.
 */

const obstacleLayer = document.getElementById('obstacle-layer');
const obstacles = [];

const OBSTACLE_SPEED = 320;
const MIN_SPAWN_INTERVAL = 1.1;
const MAX_SPAWN_INTERVAL = 2.2;

const OBSTACLE_WIDTH = { min: 22, max: 38 };
const OBSTACLE_HEIGHT = { min: 28, max: 60 };

let timeUntilNextSpawn = 0.8;

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function scheduleNextSpawn() {
  timeUntilNextSpawn = rand(MIN_SPAWN_INTERVAL, MAX_SPAWN_INTERVAL);
}

export function spawnObstacle() {
  if (!obstacleLayer) return null;

  const width = Math.round(rand(OBSTACLE_WIDTH.min, OBSTACLE_WIDTH.max));

  const height = Math.round(rand(OBSTACLE_HEIGHT.min, OBSTACLE_HEIGHT.max));

  const el = document.createElement('div');
  el.className = 'obstacle';
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;

  const partClasses = [
    'obstacle-stem',
    'obstacle-left-vertical',
    'obstacle-left-horizontal',
    'obstacle-right-vertical',
    'obstacle-right-horizontal',
  ];

  const parts = partClasses.map((className) => {
    const part = document.createElement('div');

    part.className = `obstacle-part ${className}`;

    el.appendChild(part);

    return part;
  });

  const x = obstacleLayer.clientWidth;

  el.style.left = `${x}px`;

  obstacleLayer.appendChild(el);

  obstacles.push({
    el,
    parts,
    x,
    width,
    height,
    passed: false,
  });

  return el;
}

/**
 * @param {number} deltaSeconds - Elapsed simulation time in seconds.
 * @returns {number} Newly passed obstacles in this update, each counted once.
 */
export function updateObstacles(deltaSeconds) {
  if (!obstacleLayer) return 0;

  if (!Number.isFinite(deltaSeconds) || deltaSeconds < 0) {
    return 0;
  }

  timeUntilNextSpawn -= deltaSeconds;

  if (timeUntilNextSpawn <= 0) {
    spawnObstacle();
    scheduleNextSpawn();
  }

  const dx = OBSTACLE_SPEED * deltaSeconds;
  const playerEl = document.getElementById('player');

  const playerX = playerEl
    ? playerEl.getBoundingClientRect().left - obstacleLayer.getBoundingClientRect().left
    : 0;
  let newlyPassed = 0;

  for (let i = obstacles.length - 1; i >= 0; i--) {
    const obstacle = obstacles[i];

    obstacle.x -= dx;

    obstacle.el.style.left = `${obstacle.x}px`;

    if (!obstacle.passed && obstacle.x + obstacle.width < playerX) {
      obstacle.passed = true;
      newlyPassed++;
    }

    if (obstacle.x + obstacle.width < 0) {
      obstacle.el.remove();
      obstacles.splice(i, 1);
    }
  }

  return newlyPassed;
}

/**
 * @param {DOMRect} playerBounds - Player bounds in browser viewport coordinates.
 * @returns {boolean} Whether the player overlaps an obstacle.
 */
export function checkCollision(playerBounds) {
  if (!playerBounds || !obstacleLayer) return false;

  for (const obstacle of obstacles) {
  for (const part of obstacle.parts) {
    const bounds = part.getBoundingClientRect();

    const overlap =
      playerBounds.left < bounds.right &&
      playerBounds.right > bounds.left &&
      playerBounds.top < bounds.bottom &&
      playerBounds.bottom > bounds.top;

      if (overlap) {
        return true;
      }
    }
  }

  return false;
}

export function resetObstacles() {
  for (const obstacle of obstacles) {
    obstacle.el.remove();
  }

  obstacles.length = 0;

  timeUntilNextSpawn = 0.8;
}