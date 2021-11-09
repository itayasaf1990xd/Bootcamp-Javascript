const lengths = (arrayString) => {
  const arrayLength = [];
  for (word of arrayString) {
    arrayLength.push(word.length);
  }
  return arrayLength;
};

console.log(lengths(["boo", "doooo", "hoo", "ro"]));
