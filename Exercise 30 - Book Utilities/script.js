const book1 = {
  name: "Don Quixote",
  author: "Miguel de Cervantes",
  pages: 329,
  genres: ["Novel", "Family Saga", "Epic Fiction"],
  year: 1605,
};
const book2 = {
  name: "War and Peace",
  author: "Leo Tolstoy",
  pages: 448,
  genres: ["Novel", "Family Saga", "Epic Fiction"],
  year: 1867,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    return Math.min(book1.year, book2.year);
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = {
      language,
      translator,
    };
  },
  setPublisher(book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(book1, book2) {
    return (
      book1.publisher.name === book2.publisher.name &&
      book1.publisher.location === book2.publisher.location
    );
  },
};

bookUtils.getBookDetails = (book) => {
  return `The book "${book.name}" was written by ${book.author} in the year ${
    book.year
  }.
  It is a ${book.genres.join(", ")} book. The book has ${book.pages} pages.`;
};

console.log("First Published", bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, 1990);
bookUtils.setLanguage(book2, "English");
bookUtils.setTranslation(book2, "English", "John Duo");
bookUtils.setPublisher(book1, "Biyakuga Books LTD", "Japan");
bookUtils.setPublisher(book2, "Biyakuga Books LTD", "Japan");
console.log("Same Publisher", bookUtils.isSamePublisher(book1, book2));
console.log("Book1 Details", book1);
console.log("Book2 Details", book2);
