const populationPercentages = (populations) => {
  const percentages = [];
  while (populations.length) {
    percentages.push(percentageOfWorld(populations.pop()));
  }
  return percentages;
};

const percentageOfWorld = (population) => {
  return ((population / 7900) * 100).toFixed(2) + "%";
};

console.log(populationPercentages([9, 126, 60, 331]));
