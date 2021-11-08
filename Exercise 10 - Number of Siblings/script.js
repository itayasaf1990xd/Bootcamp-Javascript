let numSiblings = parseInt(prompt("How many siblings do you have?"));
if (Number.isNaN(numSiblings) || numSiblings === 0) {
  console.log(`No siblings`);
} else if (numSiblings === 1) {
  console.log(`${numSiblings} sibling!`);
} else {
  console.log(`More than ${numSiblings} sibling!`);
}
