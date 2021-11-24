// 00
const allLi = document.querySelectorAll("ul li");
console.log(allLi);

const [myFirstDiv, mySecondDiv, myThirdDiv, myFourthDiv] =
  document.querySelectorAll('div');


// 01
const liStart = document.querySelector(".start-here");
console.log(liStart.firstChild.nodeName);
liStart.firstChild.textContent = "main title";

// 02
const ul2 = liStart.nextElementSibling.firstElementChild;
const li4 = ul2.lastElementChild.cloneNode(true);
li4.textContent = "sub title 4";
ul2.appendChild(li4);

// 03
const ul1 = liStart.parentElement;
const ul1List = ul1.querySelectorAll("li");
ul1List[ul1List.length - 1].remove();

// 04
// Method 01
document.title = "Masters Of The DOM";
// Method 02
// document.querySelector("title").textContent = "Masters Of The DOM";

// 05
document.querySelector("p").textContent = "Something else of your";
