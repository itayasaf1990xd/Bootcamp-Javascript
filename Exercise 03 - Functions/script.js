function describeCountry(country, population, capitalCity) {
  return country + " has " + population + " million people and its capital city is " + capitalCity;
}
let describeCountryOne = describeCountry("Japan", 125.8, "Tokyo");
let describeCountryTwo = describeCountry("Israel", 9.217, "Jerusalem");
let describeCountryThree = describeCountry("California", 39.51, "Sacramento");
console.log(describeCountryOne);
console.log(describeCountryTwo);
console.log(describeCountryThree);