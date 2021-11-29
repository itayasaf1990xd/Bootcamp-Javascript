const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const text = document.querySelector(".text");

function textBigger() {
  console.log("Text Bigger Function Called");
  let fontSize = parseFloat(getComputedStyle(text).getPropertyValue('font-size'));
  let fontUnit = "px"
  fontSize += 2;
  if (fontSize > 100) {
    fontSize = 100;
  }
  text.style.fontSize = `${fontSize}${fontUnit}`;
  console.log("Font Size", fontSize);
}

function textSmaller() {
  console.log("Text Smaller Function Called");
  let fontSize = parseFloat(getComputedStyle(text).getPropertyValue('font-size'));
  let fontUnit = "px"
  fontSize -= 2;
  if (fontSize < 6) {
    fontSize = 6;
  }
  text.style.fontSize = `${fontSize}${fontUnit}`;
  console.log("Font Size", fontSize);
}

plus.addEventListener("click", textBigger);
minus.addEventListener("click", textSmaller);
