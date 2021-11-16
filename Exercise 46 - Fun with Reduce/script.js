const numbers = [1, 10, 15, 20, 200, 301, 23, 17, 34];

const getMaxNumber = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return previousValue < currentValue ? currentValue : previousValue;
  });
};
console.log("Maximum Number:", getMaxNumber(numbers));

const sumOfEvenNumbers = (array) => {
  return array
    .filter((number) => {
      return number % 2 == 0;
    })
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });
};
console.log("Even Number Sum:", sumOfEvenNumbers(numbers));

const getAverage = (array) => {
  return (
    array.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }) / array.length
  );
};
console.log("Avarage:", getAverage(numbers));
