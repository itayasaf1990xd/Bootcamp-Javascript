const book = {
  name: "One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  pages: 448,
  genres: ["Novel", "Family Saga", "Epic Fiction"],
  publishedYear: 1967,
};

const swapObject = (object) => {
  const swappedObject = {};
  for (const key in object) {
    swappedObject[object[key]] = key;
  }
  return swappedObject;
};

console.log("Book Original", book);
console.log("\nBook Swapped", swapObject(book));
