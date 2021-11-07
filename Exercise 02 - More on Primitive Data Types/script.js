/*
--Delete the wrong answers--

1. Which of the following is/are strings?
a) 4
b) 4.0
c) '4' - Answer

2. Which of the following is/are numbers?
a) 4 - Answer
b) 4.0 - Answer
c) '4'
d) -4 - Answer

3. Which of the following is/are booleans?
a) true - Answer
b) false - Answer
c) "true"

4. What is the result of 80 + 71.2?
a) 151.2 - Answer
b) 151
c) 8071.2

5. What is the result of "80" + 71.2?
a) 151.2
b) 151
c) "8071.2" - Answer

6. Does 100 + 30 produce a number or a string?
a) number - Answer
b) string

7. Does "100" + 30 produce a number or a string?
a) number
b) string - Answer

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var x = 5;
let y = 5;
const z = 5;

//declare a variable and reassign a value to it
let firstName = "David";
firstName = "John";

//create a variable and after that assign a string with its value being: He's got it!
let sentence;
sentence = "He's got it!";

/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
let bill = 100;
let tax = 500;
let calculate =  "Your total bill is " + (bill * tax) + "$";
console.log(calculate);

// Round the number 50.6 to its nearest integer
let roundNumber = Math.round(50.6);
console.log(roundNumber);

//Create a variable that is undefined
let i;
console.log(i);
