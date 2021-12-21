//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();
const colRef = collection(db, "books");

// Array containing books as object. Then a function to make a book and add it.
//let books = [];
let myLibrary = [];
onSnapshot(colRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    myLibrary.push({ ...doc.data(), id: doc.id });
  });
  console.log(myLibrary);
  createCard();
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function bookForm() {
  let form = document.querySelector("form");
  form.addEventListener("submit", addBookToLibrary);

  function addBookToLibrary(event) {
    event.preventDefault();
    addDoc(colRef, {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      pages: document.getElementById("pages").value,
      read: document.getElementById("read").checked,
    }).then(() => {
      form.reset();
      // createCard();
    });

    //let title = document.getElementById("title").value;
    //let author = document.getElementById("author").value;
    //let pages = document.getElementById("pages").value;
    //let read = document.getElementById("read").checked;
    //
    //let newBook = new Book(title, author, pages, read);
    //myLibrary.push(newBook);
    //localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }
}

//Function to create an individual card
function createCard() {
  /*if (localStorage.getItem("myLibrary") === null) {
    myLibrary = [];
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    //myLibrary = books;
  }*/
  console.log(myLibrary);
  const display = document.querySelector(".display");
  display.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.dataset.index = i;

    card.classList.add("card");
    const cardTitle = document.createElement("h3");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("button");

    if (myLibrary[i].read === true) {
      cardRead.classList.add("cardRead");
    } else {
      cardRead.classList.add("cardNotRead");
    }

    // Function for toggling the read status
    function cardReadStatus() {
      cardRead.addEventListener("click", function () {
        this.classList.toggle("cardRead");
        this.classList.toggle("cardNotRead");
        if (cardRead.classList == "cardNotRead") {
          cardRead.textContent = "Not read";
          myLibrary[card.dataset.index].read = false;
          localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
        } else {
          cardRead.textContent = "Read";
          myLibrary[card.dataset.index].read = true;
          localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
        }
      });

      for (let item in myLibrary[i]) {
        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = myLibrary[i].pages + " pages";
        if (cardRead.classList == "cardNotRead") {
          cardRead.textContent = "Not read";
        } else {
          cardRead.textContent = "Read";
        }
      }
    }

    //Trash button
    const trashBtn = document.createElement("p");
    function trashButton() {
      trashBtn.classList.add("trashBtn");
      trashBtn.textContent = "delete";
      trashBtn.addEventListener("click", function () {
        myLibrary.splice(card.dataset.index, 1);
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
        createCard();
      });
    }

    function appendCard() {
      card.appendChild(cardTitle);
      card.appendChild(cardAuthor);
      card.appendChild(cardPages);
      card.appendChild(cardRead);
      card.appendChild(trashBtn);
      display.appendChild(card);
    }

    //Call the functions
    cardReadStatus();
    trashButton();
    appendCard();
  }
}

bookForm();
//createCard();

// NEW BOOK and close buttons
const openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", function () {
  document.getElementById("bookForm").style.display = "block";
  openBtn.style.display = "none";
});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  document.getElementById("bookForm").style.display = "none";
  openBtn.style.display = "block";
});
