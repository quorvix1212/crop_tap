let score = 0;
let timeLeft = 60;
let gameInterval;

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const gameOverText = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");
const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    if (timeLeft <= 0) return;

    if (!tile.classList.contains("crop")) {
      tile.classList.add("crop");
      score++;
      scoreEl.textContent = score;
    }
  });
});

function startGame() {
  gameInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      gameOverText.classList.remove("hidden");
      finalScore.textContent = score;
    }
  }, 1000);
}

startGame();
