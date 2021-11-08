const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return `${((population / worldPopulation) * 100).toFixed(2)}%`;
}

const percentageOfWorld2 = (population) => {
  `${((population / worldPopulation) * 100).toFixed(2)}%`;
};

const israel = 9.217,
  japan = 125.8,
  america = 329.5,
  china = 1441;

console.log("Function Declaration Result:");
console.log(percentageOfWorld1(china));
console.log(percentageOfWorld1(israel));
console.log(percentageOfWorld1(japan));
console.log(percentageOfWorld1(america));

console.log("\nFunction Expression Result:");
console.log(percentageOfWorld1(china));
console.log(percentageOfWorld1(israel));
console.log(percentageOfWorld1(japan));
console.log(percentageOfWorld1(america));
