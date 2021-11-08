/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions

    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
// Function Declarations
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

// Explicit
const welcome = () => {
  return "Welcome to Appleseeds Bootcamp!";
};

// Implicit
const welcome = () => "Welcome to Appleseeds Bootcamp!";

// Function Declarations
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

// Explicit
const power = (a) => {
  return Math.pow(a, 2);
};

// Implicit
const power = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.
// Function Expressions
const squareRoot = (a) => Math.sqrt(a);

// IIFE
(function squareRoot(a) {
  return Math.sqrt(a);
})(5);

// IIFE
((a) => Math.sqrt(a))(5);

// Function Expressions
const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// IIFE
(function randomNumbers(a, b) {
  return Math.random * (a - b) + b;
})(2, 1);

// IIFE
((a, b) => Math.random() * (a - b) + b)(2, 1);
