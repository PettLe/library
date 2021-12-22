import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();
const colRef = collection(db, "books");

// Array containing books as object. Then a function to make a book and add it.
let myLibrary = [];
onSnapshot(colRef, (snapshot) => {
  myLibrary = [];
  snapshot.docs.forEach((doc) => {
    myLibrary.push({ ...doc.data(), id: doc.id });
  });
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
    });
  }
}

//Function to create an individual card
function createCard() {
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
        const docRef = doc(db, "books", myLibrary[card.dataset.index].id);
        if (cardRead.classList == "cardNotRead") {
          updateDoc(docRef, {
            read: false,
          });
          cardRead.textContent = "Not read";
        } else {
          updateDoc(docRef, {
            read: true,
          });
          cardRead.textContent = "Read";
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
        const docRef = doc(db, "books", myLibrary[card.dataset.index].id);
        deleteDoc(docRef);
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
