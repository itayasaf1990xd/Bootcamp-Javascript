const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const booksCanBeRead = (library) => {
  library.forEach((book) => {
    book.readingStatus
      ? console.log(
          `The book name: ${book.title}\nThe author name: ${book.author}\nThe reading status: ${book.readingStatus}\n`
        )
      : null;
  });
};

booksCanBeRead(library);
