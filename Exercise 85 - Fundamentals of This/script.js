// Question 01
console.log(this); // windows in browser or {} in node

// Question 02
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`); // Hello undefined
  },
};
myObj.greet();

// Question 03
const myFuncDec = function () {
  console.log(this); // windows in browser or {} in node
};
myFuncDec();

// Question 04
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// Question 05
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

// a. windows in browser or {} in node;
// b. document or the element that call the event listener
document.querySelector(".element").addEventListener(function () {
  console.log(this);
});
