import Book from "./book.js";
import Phone from "./phone.js";

const myBook = new Book(
  "Harry Potter and the Sorcerer's Stone",
  350,
  "closed",
  "Red",
  "Black"
);

const myPhone = new Phone(
  "iPhone 15",
  "Grey",
  1,
  3,
  95,
  "off",
  "December 25, 2022 9:00:00 PST"
);

const markup = (book) => {
  return `
        <div>
            <h3>${book.name}</h3>
        </div>
    `;
};

console.log("My new book:", myBook);
console.log(myPhone.dateAcquired);
console.log(myPhone.phoneAge());

const bookOutput = (book) => {
  const bookText = `
  <p>My book is ${book.name} 
  and has ${book.pages} pages. 
  It is currently ${book.status}.</p>`;
  return bookText;
};

const main = document.querySelector(".main");

const content = `
  <article class="phone" id="everyday">
    <h1 class="phone_model">${myPhone.model}</h1>
    <ul class="phone__features">
      <li class="phone_color">Color:<span> ${myPhone.color}</span></li>
      <li class="phone_front_cameras">Front Cameras:<span> ${
        myPhone.frontCameras
      }</span></li>
      <li class="phone_back_cameras">Back Cameras:<span> ${
        myPhone.frontCameras
      }</span></li>
      <li class="phone_age">Age of Phone:<span> ${myPhone.phoneAge()} days old</span></li>
      <li class="phone_battery">Battery Level:<span> ${
        myPhone.batteryLevel
      }%</span></li>
      <li class="phone_status">Phone Status:<span> Currently ${
        myPhone.status
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;
