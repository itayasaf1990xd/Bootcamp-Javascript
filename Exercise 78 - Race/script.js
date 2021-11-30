const player1 = document.querySelector("#player1-race");
const player2 = document.querySelector("#player2-race");

const checkPressedKey = (event) => {
  if (event.key === "1" || event.key === "d") {
    updateCarPosition(player1);
  }
  if (event.key === "2" || event.key === "ArrowRight") {
    updateCarPosition(player2);
  }
};

const updateCarPosition = (player) => {
  const active = player.querySelector(".active");
  active.classList.remove("active");
  active.nextElementSibling.classList.add("active");
  isPlayerWon(player, active);
};

const isPlayerWon = (player, active) => {
  if (active.nextElementSibling.classList.contains("finish")) {
    document.removeEventListener("keyup", checkPressedKey);
    const title = document.querySelector("h1");
    title.textContent += ` - ${player.getAttribute("data-player")} Won`;
    isPlayAgain();
  }
};

const isPlayAgain = () => {
  setTimeout(() => {
    if (confirm("Play Again?")) {
      window.location.reload();
    }
  }, 1000);
};

document.addEventListener("keyup", checkPressedKey);
