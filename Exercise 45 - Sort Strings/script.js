let foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
foods.sort();
console.log("Foods Sort:", foods);
foods.reverse();
console.log("Foods Reverse:", foods);

foods = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
console.log(foods.sort((a, b) => a.localeCompare(b)));
console.log(foods.sort((a, b) => b.localeCompare(a)));

foods = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(foods.sort((a, b) => a.length - b.length));
console.log(foods.sort((a, b) => b.length - a.length));
