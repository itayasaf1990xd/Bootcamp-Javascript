const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const showCountries = (listOfNeighbours) => {
  const countriesDetails = [];
  for (const countries of listOfNeighbours) {
    for (const country of countries) {
      countriesDetails.push(`neighbour: ${country}`);
    }
  }
  return countriesDetails;
};

console.log(showCountries(listOfNeighbours));
