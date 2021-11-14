const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const swap = (array1, array2) => {
  if (array1.length < array2.length) {
    const temp = array2;
    array2 = array1;
    array1 = temp;
  }
};

const compare = (array1, array2) => {
  swap(array1, array2);
  const same = [];
  for (const element1 of array1) {
    for (const elemen2 of array2) {
      if (element1 === elemen2) {
        same.push(element1);
      }
    }
  }
  return same;
};

console.log(compare(food1, food2));
