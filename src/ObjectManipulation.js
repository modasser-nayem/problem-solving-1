// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
   {
      title: "Good Habit",
      author: "Nayem Ali",
      year: 2013,
   },
   {
      title: "Interview Crack",
      author: "Sohidul Alam",
      year: 2021,
   },
   {
      title: "My Happiness",
      author: "Sujon kumar",
      year: 2017,
   },
   {
      title: "Become a professional",
      author: "Rabi Hossian",
      year: 2024,
   },
];

function getBookTitles(books) {
   if (!Array.isArray(books)) {
      console.log("Error: argument must be arrays only");
      return;
   } else {
      const bookTitles = books.map((book) => book.title);
      return bookTitles;
   }
}

const result = getBookTitles(books);
console.log("Result: ", result);
