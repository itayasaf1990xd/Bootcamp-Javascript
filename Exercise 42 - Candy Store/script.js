const candyStore = {
  candies: [
    {
      id: "as12f",
      name: "mint gum",
      price: 2,
      amount: 2,
    },
    {
      id: "5hd7y",
      name: "twix",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1
const getCandy = (candyStore, id) => {
  for (const candy of candyStore.candies) {
    return candy.id === id ? candy : null;
  }
};
console.log(getCandy(candyStore, "as12f"));

// 2
const getPrice = (candyStore, id) => {
  return getCandy(candyStore, id).price;
};
console.log(getPrice(candyStore, "as12f"));

// 3
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    id,
    name,
    price,
    amount: 1,
  });
}
addCandy(candyStore, "gf123", "chocolate", 10);
console.log(candyStore.candies);

// 4
const buyCandy = (candyStore, id) => {
  const candyToBuy = getCandy(candyStore, id);
  candyToBuy.amount += -1;
  candyStore.cashRegister += candyToBuy.price;
};
buyCandy(candyStore, "as12f");
console.log("Candy Store After Purchase", candyStore);
