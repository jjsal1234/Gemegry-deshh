document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const obstacles = document.querySelectorAll(".obstacle");

    let score = 0;

    function updateScore() {
        score++;
        console.log("Score: " + score);
    }

    function moveObstacles() {
        obstacles.forEach((obstacle) => {
            const obstacleBottom = parseInt(
                window.getComputedStyle(obstacle).getPropertyValue("bottom")
            );

            if (obstacleBottom > 0 && obstacleBottom < 50) {
                if (
                    parseInt(window.getComputedStyle(player).getPropertyValue("bottom")) <
                    100
                ) {
                    alert("Game Over! Your Score: " + score);
                    score = 0;
                    resetGame();
                }
            }

            obstacle.style.bottom = obstacleBottom - 2 + "px"; // Adjust the decrement value to slow down the descent

            if (obstacleBottom <= 0) {
                obstacle.style.bottom = "100vh";
                updateScore();
            }
        });
    }

    function jump() {
        const playerBottom = parseInt(
            window.getComputedStyle(player).getPropertyValue("bottom")
        );

        if (playerBottom < 200) {
            player.style.bottom = playerBottom + 50 + "px";
        }
    }

    function resetGame() {
        score = 0;
        obstacles.forEach((obstacle) => {
            obstacle.style.bottom = "100vh";
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            jump();
        }
    });

    setInterval(moveObstacles, 50);
});
