const book = {
  name: "One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  pages: 448,
  genres: ["Novel", "Family Saga", "Epic Fiction"],
  publishedYear: 1967,
};

const bookDesciption = (book) => {
  return `The book "${book.name}" was written by ${book.author} in the year ${book.publishedYear}.
  It is a ${book.genres.join(', ')} book. The book has ${book.pages} pages.`;
}

console.log(bookDesciption(book));