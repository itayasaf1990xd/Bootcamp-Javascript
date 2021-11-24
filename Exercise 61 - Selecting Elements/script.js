// 01
console.log(document.body);
// 02
console.log(document.body.innerHTML);
// 03
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  console.log(input);
});
const inputs2 = document.getElementsByTagName("input");
for(let i = 0; inputs2.length; i++) {
  console.log(inputs2[i])
}
// 04
const items = document.querySelectorAll("body *");
console.log(items);
items.forEach((item) => {
  console.log(item);
});