const lastOccurrenceOfWord = (string, word) => {
  return string.lastIndexOf(word);
};

const string = "The more you know, the more you know that you don't know";
const word = "you";
console.log('last occurrence of the word "you" is in index:', lastOccurrenceOfWord(string, word));
