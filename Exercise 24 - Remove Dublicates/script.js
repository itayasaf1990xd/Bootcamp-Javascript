const removeDuplicate = (numbers) => {
  let noDuplicateArray = [];
  numbers.forEach((element) => {
    if (noDuplicateArray.indexOf(element) === -1) {
      noDuplicateArray.push(element);
    }
  });
  return noDuplicateArray;
};

const numbers = [1, 1, 3, 5, 7, 9, 3];
console.log("Array with duplicates", numbers);
console.log("Array without duplicates", removeDuplicate(numbers));
