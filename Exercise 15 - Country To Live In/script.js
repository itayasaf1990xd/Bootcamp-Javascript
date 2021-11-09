const countryToLiveIn = (language, isIsland, population, country) => {
  if (language === "English" && !isIsland && population < 400) {
    return `You should live in ${country}`;
  }
  return `${country} does not meet your criteria`;
};

console.log(countryToLiveIn("Hebrew", false, 10, "Israel"));
console.log(countryToLiveIn("Japanese", true, 200, "Japan"));
console.log(countryToLiveIn("English", false, 400, "United State"));
