const library = [
  {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true
  },
  {
  author: "Steve Jobs",
  title: "Walter Isaacson",
  readingStatus: true
  },
  {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games",
  readingStatus: false
  }
  ];




function displayTheBook(library) {
    for (let book of library) {
        if (book.readingStatus) {
            console.log("Book Name: " + book.title);
            console.log("Author Name: " + book.author);
            console.log("Reading Status: " + book.readingStatus);
            console.log("-----------------");
        }
    }
}

displayTheBook(library);

// its log only 2 book because the third one has set to false 
// if we need to log all the books we need to delete if condition
