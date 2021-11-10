const addFruits = (fruits, fruitsToAdd) => {
  fruits.splice(2, 0, fruitsToAdd[0], fruitsToAdd[1]);
  return fruits;
};

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitsToAdd = ["Lemon", "Kiwi"];
console.log("Array with new fruits", addFruits(fruits, fruitsToAdd));