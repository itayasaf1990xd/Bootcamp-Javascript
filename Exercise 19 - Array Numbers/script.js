const arrayPrint = (array) => {
  console.log(...array);
};

const arrayLength = (array) => {
  let counter = 0;
  while (array[counter] !== undefined) {
    counter++;
  }
  return counter;
};

const arraySum = (array) => {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

const arrayMulti = (array) => {
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
};

const array = [1, 7, 3, 0, -5, 7, 3, 9];
arrayPrint(array);
console.log(`Array Length is: ${arrayLength(array)}`);
console.log(`Array Sum is: ${arraySum(array)}`);
console.log(`Array Multi is: ${arrayMulti(array)}`);
