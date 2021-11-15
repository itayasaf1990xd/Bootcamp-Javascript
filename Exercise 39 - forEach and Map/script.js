// 1
const doubleValues = (array) => {
  return array.map((element) => element * 2);
};
console.log(doubleValues([1, 2, 3]));

// 2
const onlyEvenValues = (array) => {
  const returnArray = [];
  array.forEach((element) => {
    if (element % 2 === 0) returnArray.push(element);
  });
  return returnArray;
};
console.log(onlyEvenValues([1, 2, 3, 4]));

// 3
function showFirstAndLast(array) {
  const returnArray = [];
  array.forEach((element, index) =>
    (index === 0 || index === array.length - 1) && typeof element === "string"
      ? returnArray.push(element)
      : ""
  );
  return returnArray;
}
console.log(showFirstAndLast(["Biakuga", 1, 2, 5, "Higashiri"]));

// 4
const vowelCount = (string) => {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
  string.split("").map((character) => {
    return ["a", "e", "i", "o", "u", "y"].indexOf(character.toLowerCase()) !==
      -1
      ? (vowels[character] += 1)
      : "";
  });
  return vowels;
};
console.log(vowelCount("My name is Biyakuga Higashiri"));

// 5
const capitalize = (string) => {
  return string
    .split("")
    .map((character) => character.toUpperCase())
    .join("");
};
console.log(capitalize("My name is Biyakuga Higashiri"));

// 6
const shiftLetters = (string) => {
  return string
    .split("")
    .map((character, index, array) => {
      return index !== array.length - 1 ? array[index + 1] : array[0];
    })
    .join("");
};
console.log(shiftLetters("abcDEfGHijklmnopqrstuvwxyZ"));

// 7
const swapCase = (string) => {
  return string
    .split(" ")
    .map((word, index) => (index % 2 ? capitalize(word) : word.toLowerCase()))
    .join(" ");
};
console.log(swapCase("My name is Biyakuga Higashiri"));
