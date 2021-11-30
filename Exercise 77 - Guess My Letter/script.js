const letter = document.querySelector(".letter");
const feedback = document.querySelector(".feedback");
const guessesCards = document.querySelector(".guesses-cards");
const guesses = document.querySelector(".guesses-container");
const letters = "abcdefghijklmnopqrstuvdxyz".split("");
const randomLetter = letters[Math.floor(Math.random() * letters.length)];
const guessed = [];

function createLetterCard(character) {
  const card = document.createElement("div");
  card.textContent = character;
  card.classList.add("card");
  guessesCards.appendChild(card);
}

function checkGuessedLetter(event) {
  console.log(event)
  if (/[a-z]/i.test(event.key)) {
    if (guessed.find((character) => event.key === character)) {
      feedback.innerHTML = `You already tried <span class="feedback-letter">${event.key}</span>`;
      feedback.classList.add("feedback-invalid");
    } else if (event.key === randomLetter) {
      feedback.innerHTML = `Good job <span class="feedback-letter">${event.key}</span> is the secret letter`;
      feedback.classList.remove("feedback-invalid");
      feedback.classList.add("feedback-valid");
      letter.textContent = event.key;
      document.removeEventListener("keypress", checkGuessedLetter);
      const playAgain = `<h4>Would you like to play again?</h4>
      <div class="button-container">
      <div id="button-yes" class="button">Yes</div>
      <div id="button-no" class="button">No</div>
      </div>`;
      guesses.innerHTML = playAgain;
      const button = document.querySelector("#button-yes");
      button.addEventListener("click", () => window.location.reload());
    } else {
      guessed.push(event.key);
      feedback.innerHTML = `<span class="feedback-letter">${event.key}</span> is not the letter`;
      feedback.classList.add("feedback-invalid");
      createLetterCard(event.key);
    }
  } else {
    feedback.innerHTML = `<span class="feedback-letter">${event.key}</span> is a non alphabetical letter`;
    feedback.classList.add("feedback-invalid");
  }
}

document.addEventListener("keypress", checkGuessedLetter);