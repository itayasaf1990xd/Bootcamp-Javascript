// 01
const array1 = new Array(100).fill("I will not do it again!");
console.log(array1);
console.log(array1.length);

// 02
const array2 = Array.from(new Array(100), (value, index) => index + 1);
console.log(array2);
console.log(array2.length);

// 03
// Method 01
const object1 = { id: "123456789", name: "Biyakuga Higashiri" };
const array3 = Object.values(object1);
console.log(array3);

// 04
// Method 01
const array4 = ["USD", "EUR", "INR"];
const object3 = array4.reduce(function (object, key) {
  object[key] = 0;
  return object;
}, {});
console.log(object3);

// Method 02
const object4 = {};
for (let i = 0; i < array4.length; i++) {
  object4[array4[i]] = 0;
}
console.log(object4);

// Method 03
console.log(Object.assign({}, array4));

// 05
const array5 = [1, 2, 3, 4];
console.log(Array.isArray(array5));

// 06
// Not Effect Original Array
const array6 = [1, 2, 3, 4];
const arrayCopy1 = [...array6];
arrayCopy1.push(5);
console.log(array6);
console.log(arrayCopy1);

// Effect Original Array
const arrayCopy2 = array6;
arrayCopy2.push(5);
console.log(array6);
console.log(arrayCopy2);
