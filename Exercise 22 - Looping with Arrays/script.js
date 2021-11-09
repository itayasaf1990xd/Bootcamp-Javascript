const populationPercentages = (populations) => {
  const percentages = [];
  for (population of populations) {
    percentages.push(percentageOfWorld(population).toFixed(2) + "%");
  }
  return percentages;
};

const percentageOfWorld = (population) => {
  return (population / 7900) * 100;
};

const populations = [12, 57, 63, 491];

console.log(populationPercentages(populations));
