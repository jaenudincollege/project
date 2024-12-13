function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages ${
        this.read ? "read" : "not read yet"
      }`
    );
  };
}

// event handler
const button = document.querySelector(".btn");
const form = document.querySelector(".form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const submit = document.querySelector(".submit");
const read = document.querySelector("#read");

// book selector
const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookPages = document.querySelector(".pages");
const bookStatus = document.querySelector(".status");

button.addEventListener("click", function (e) {
  form.classList.toggle("hidden");
  title.focus();
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const titleValue = title.value;
  const authorValue = author.value;
  const pagesValue = pages.value;
  const readValue = read.value;


  console.log(titleValue, authorValue, pagesValue, readValue);
});
