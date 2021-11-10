const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (array) => {
  const charCountObject = {};
  const charString = array.join("").toLowerCase();
  for (const character of charString) {
    if (charCountObject.hasOwnProperty(character)) {
      charCountObject[character]++;
    } else {
      charCountObject[character] = 1;
    }
  }
  return charCountObject;
};

console.log("Original Array", array);
console.log("Count Object", countLetters(array));
