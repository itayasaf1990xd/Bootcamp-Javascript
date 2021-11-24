const myFirstDiv = document.querySelector("#myFirstDiv");
const mySecondDiv = document.querySelector("#mySecondDiv");
const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");

const myDivsArray = document.querySelectorAll("div");
console.log("My Divs Array", myDivsArray);

const myDivsMap = new Map();
myDivsArray.forEach((div) => {
  myDivsMap.set(div.id, div);
});
console.log("My Divs Map", myDivsMap);
console.log(myDivsMap.get("myFirstDiv"));
