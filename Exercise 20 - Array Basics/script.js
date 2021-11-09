let people = ["Greg", "Mary", "Devon", "James"];
// 01
console.log("People Original:", people);

// 02
// Method 01
people.splice(people.indexOf("Greg"), 1);
console.log("People without Grey:", people);

// Method 02
// console.log(people.shift());

// 03
// Method 01
people.splice(people.indexOf("James"), 1);
console.log("People without James:", people);

// Method 02
// console.log(people.pop());

// 04
people.unshift("Matt");
console.log("People with Matt:", people);

// 05
people.push("Biyakuga");
console.log("People with Biyakuga:", people);

// 06
console.log("People now:", ...people);

// 07
// Method 01
// const deletePeople = [people.indexOf("Mary"), people.indexOf("Matt")].sort();
// console.log("People: ", people);
// console.log("deletePeople: ", deletePeople);
// console.log(people.slice(0, deletePeople[0]));
// console.log(people.slice(deletePeople[0] + 1, deletePeople[1]));
// console.log(people.slice(deletePeople[1] + 1));
// const copyPeople =  new Array().concat(
//   people.slice(0, deletePeople[0]),
//   people.slice(deletePeople[0] + 1, deletePeople[1]),
//   people.slice(deletePeople[1] + 1)
// );
// console.log("Copy People: ", copyPeople);

// Method 02
// const copyPeople = people.slice(2, people.length);
// console.log("Copy people:", copyPeople);

// Method 03
const peopleToDelete = ["Mary", "Matt"];
const deletePeopleByName = (people, peopleToDelete) => {
  peopleToDelete.forEach(personToDelete => {
    personToDelete.splice(person, 1);
  });
  return people;
};
console.log("Copy People without Mary and Matt", deletePeopleByName(people, peopleToDelete));

// 08
const maryIndex = people.indexOf("Mary");
console.log("Mary Index:", maryIndex);

// 09
const fooIndex = people.indexOf("Foo");
console.log("Foo Index:", fooIndex);

// 10
people = ["Greg", "Mary", "Devon", "James"];
const devonIndex = people.indexOf("Devon");
people.splice(devonIndex, 1);
people = [
  ...people.slice(0, devonIndex),
  "Elizabeth",
  "Artie",
  ...people.slice(devonIndex),
];
console.log("People with Elizabeth and Artie:", people);

// 11
const withBob = people.concat(["Bob"]);
console.log("People with Bob:", withBob);
