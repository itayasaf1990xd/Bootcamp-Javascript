const numbers = [1, -5, 666, 2, 400, 11];
const sortNumbers = (a, b) => {
  return a - b;
};

// Method 01
numbers.sort(sortNumbers);
console.log(numbers);

// Method 02
console.log([6, 1, 3, 9, 7, 2, 5, 4, 8].sort((a, b) => b - a));
