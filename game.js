const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

let score = 0;
function moveTarget() {
  const gameWidth = gameArea.clientWidth;
  const gameHeight = gameArea.clientHeight;
  const targetSize = target.offsetWidth;

  const randomX = Math.random() * (gameWidth - targetSize);
  const randomY = Math.random() * (gameHeight - targetSize);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

// Event listener for clicks on target
target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

// Move the target every 1.5 seconds automatically
setInterval(moveTarget, 1500);

// Initial position
moveTarget();
