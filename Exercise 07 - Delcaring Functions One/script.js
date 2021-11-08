/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions

    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions

// Function Declarations
function welcome() {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}

// Function Expressions
const welcome = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

// Function Declarations
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

// Function Expressions
const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// Function Declarations
function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

// Function Expressions
const add = (a, b = 5) => {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations

// Function Expressions
const hello = () => "Hello!";

// Function Declarations
function hello() {
  return "Hello!";
}

// Function Expressions
const squareRoot = a => Math.sqrt(a);

// Function Declarations
function squareRoot(a) {
  return Math.sqrt(a);
}

// Function Expressions
const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// Function Declarations
function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
