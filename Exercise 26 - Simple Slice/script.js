const sliceElementsFromArray = (fruits) => {
  return new Array().concat(
    fruits.slice(fruits.indexOf("Orange"), fruits.indexOf("Orange") + 1),
    fruits.slice(fruits.indexOf("Lemon"), fruits.indexOf("Lemon") + 1)
  );
};

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Fruits sliced array:", sliceElementsFromArray(fruits));
