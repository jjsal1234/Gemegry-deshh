const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: 50,
  y: canvas.height / 2 - 15,
  width: 30,
  height: 30,
  color: "blue",
  velocity: 5,
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    // Add jumping logic or any other action you want
  }
});

gameLoop();
