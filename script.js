// const updateBook = (update) => {
//   let main = document.querySelector("main");
//   main.innerHTML = markup(book);
//   console.info(update);
// };

import Book from "./book.js";
import Phone from "./phone.js";

const myBook = new Book(
  "Harry Potter and the Sorcerer's Stone",
  350,
  "closed",
  "Red",
  "Black"
);

const myPhone = new Phone("iPhone", "Grey", 1, 3, 95, "off");

const markup = (book) => {
  return `
        <div>
            <h3>${book.name}</h3>
        </div>
    `;
};

console.log("My new book:", myBook);
console.log(myPhone.status);

// const main = document.createElement("main");
// main.innerHTML = markup(book);
// document.body.appendChild(main);
