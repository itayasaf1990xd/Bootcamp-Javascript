const message = document.querySelector(".message");
const button = document.querySelector(".button");
const textarea = document.querySelector(".textarea");

textarea.addEventListener("input", checkChange);
function checkChange() {
  return textarea.value ? message.classList.add("hidden") : null;
}

button.addEventListener("click", checkMessage);
function checkMessage() {
  message.classList.remove("hidden");
  const inputValue = textarea.value;
  if (inputValue.length > 100) {
    message.classList.remove("bad");
    message.classList.add("good");
    message.textContent = "Good you can submit the form";
  } else {
    message.classList.remove("good");
    message.classList.add("bad");
    message.textContent = "You must enter at least 100 characters before clicking the button.";
  }
}
