class Book {
  constructor(title, author, genre, number) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.number= number;
  }

  clone() {
    return new Book(this.title, this.author, this.genre, this.number);
  }

  display() {
    console.log(`Книга: "${this.title}" автор ${this.author}, жанр: ${this.genre}, number vidannya: ${this.number}`);
  }
}

function main() {
  const originalBook = new Book("Місто", "Валер'ян Підмогильний", "роман", "1");
  console.log("Оригінал:");
  originalBook.display();

  const clonedBook = originalBook.clone();
  clonedBook.number = "2";
  clonedBook.genre ="драма"

  console.log("\nКлон :");
  clonedBook.display();

  const clonedBooks = originalBook.clone();
  clonedBooks.number = "3";
  clonedBooks.genre="комедія"

  console.log("\nКлон :");
  clonedBooks.display();
}


main();

