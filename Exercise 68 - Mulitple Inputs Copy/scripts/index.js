const code = document.querySelector("[data-code]").textContent = Math.floor(Math.random() * 899999 + 100001).toString();
const digits = document.querySelectorAll(".digit");
const verifyButton = document.querySelector(".digits-button");
const resetButton = document.querySelector(".reset-button");
const verifyMessage = document.querySelector(".verify-Message");

function verifyCode() {
  for (let i = 0; i < digits.length; i++) {
    if (digits[i].value !== code[i]) {
      verifyMessage.textContent =
        "Error: input doesn't match the vertification code";
      verifyMessage.style.color = "#a8032f";
      digits.forEach((digit) => (digit.value = ""));
      digits[0].focus();
      return;
    }
  }
  verifyMessage.textContent = "Good: You're code was verified successfully";
  verifyMessage.style.color = "#03a82f";
  return;
}

function resetCode() {
  digits.forEach((digit) => {
    digit.value = "";
  });
  verifyMessage.textContent = "";
}

digits.forEach((digit) => {
  // Input Listener
  digit.addEventListener("input", (element) => {
    const current = element.target;
    if (current.value.length === 1) {
      if (current.dataset.digit < digits.length) {
        current.nextElementSibling.focus();
      }
      if (current.dataset.digit >= digits.length) {
        verifyButton.click();
      }
    }
  });
  // Paste Listener
  digit.addEventListener("paste", (element) => {
    element.preventDefault();
    const clipboard = element.clipboardData.getData("text").split("");
    let current = element.target;
    while (
      clipboard.length &&
      current &&
      current.dataset.digit <= digits.length
    ) {

      current.value = clipboard.shift();
      current = current.nextElementSibling;
      if (current) {
        current.focus();
      }
    }
    if (digits[digits.length - 1].value) {
      verifyButton.click();
    }
  });
  // Keydown Listener
  digit.addEventListener("keydown", (element) => {
    const current = element.target;
    if (element.key === "Backspace") {
      console.log("a",current.value.length)
      if (!current.value.length) {
        current.previousElementSibling.focus();
      }
    }
  });
});

verifyButton.addEventListener("click", verifyCode);
resetButton.addEventListener("click", resetCode);
