const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    const regex = new RegExp(/[^A-Za-z]/gi);
    if (regex.test(words.join(""))) {
      reject("Error array include not string elements");
    }
    resolve(
      words.map((word) => {
        return word.toUpperCase();
      })
    );
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    const regex = new RegExp(/[^A-Za-z]/gi);
    if (regex.test(words.join(""))) {
      reject("Error array include not string elements");
    }
    resolve(words.sort());
  });
};

const print = (array) => {
  console.log(array);
};

const words = ["Ernest", "Daniel", "Fida", "Svetlana", "Mati", "Omar"];
makeAllCaps(words).then(sortWords).then(print).catch(print); // Good
const words2 = ["Ernest", "8", "Fida", "Svetlana", "Mati", "Omar"];
makeAllCaps(words2).then(sortWords).then(print).catch(print); // Error
