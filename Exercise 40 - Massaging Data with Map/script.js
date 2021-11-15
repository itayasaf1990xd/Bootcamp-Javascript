const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1
const getNames = (data) => {
  return data.map((element) => element.name);
};

// 2
const getYearBefore1990 = (data) => {
  const returnArray = [];
  data.forEach((element) => {
    const year = element.birthday.split("-").pop();
    year < 1990 ? returnArray.push(element) : null;
  });
  return returnArray;
};

// 3
const getFoodCounted = (data) => {
  const foods = data
    .map((element) => {
      return Object.values(element.favoriteFoods);
    })
    .flat(Infinity);
  const foodObject = {};
  for (const food of foods) {
    if (foodObject.hasOwnProperty(food)) {
      foodObject[food] += 1;
    } else {
      foodObject[food] = 1;
    }
  }
  return foodObject;
};

console.log(getNames(data));
console.log(getYearBefore1990(data));
console.log(getFoodCounted(data));
