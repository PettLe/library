/* CREATE the god damn basic layout so you can make a form*/


/* Create an ARRAY, which takes the books (and their data) as an OBJECT. And create a
function to take user INPUT and do that. Use HTML FORM in a div.*/
let myLibrary = [
    {title: "Harry Potter",
author: "J.K. Rowling",
pages: 243,
read: true},
{title: "The hobbit",
author: "J.R.R. Tolkien",
pages: 176,
read: false},
];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}



let form = document.querySelector('form');
form.addEventListener('submit', addBookToLibrary);
function addBookToLibrary(event) {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
  
        /*if (read === "false") {
            return false;
        } else {
            return true;
        }*/
       // console.log(myLibrary[2].read);

/*for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].read);
}*/
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    form.reset();
    event.preventDefault();
    console.log(myLibrary[myLibrary.length-1].read);
createCard();
}

console.log(myLibrary);

/* Create a LOOP that goes through the array and shows every book on the page (or in a cards).
 Might be easier to add few books manually.*/

function createCard() {

const display = document.querySelector(".display");
display.innerHTML = "";

for (i = 0; i < myLibrary.length; i++) {
const card = document.createElement('div');
    card.dataset.index = i;


card.classList.add("card");
const cardTitle = document.createElement("h3");
const cardAuthor = document.createElement("p");
const cardPages = document.createElement("p");
const cardRead = document.createElement("button");
cardRead.classList.add("cardRead");
/* eventlistener, joka togglee JS datassa true tai false luettuun. Yhdistä true ja false
erivärisiin button layoutteihin

TAI SITTEN! Ei Checkboxia. Samantien formiin nappi joka kliaktessa vaan muuttaa väriä.
Samalla sen value tms muuttuu ja siirtyy objektiin?*/

const trashBtn = document.createElement("p");
trashBtn.classList.add("trashBtn");
trashBtn.addEventListener("click", function() {
    console.log("CLICK!");
    myLibrary.splice(card.dataset.index, 1);
  createCard();
    console.log(myLibrary);
});

for (let item in myLibrary[i]) {
cardTitle.textContent = (myLibrary[i].title);
cardAuthor.textContent = (myLibrary[i].author);
cardPages.textContent = (myLibrary[i].pages) + " pages";
trashBtn.textContent = "delete";
cardRead.textContent = "Read";

}

card.appendChild(cardTitle);
card.appendChild(cardAuthor);
card.appendChild(cardPages);
card.appendChild(cardRead);
card.appendChild(trashBtn);
display.appendChild(card);

}
}

createCard();


 /* NEW BOOK button, which brings up a FORM, which takes new book: author, title, pages and
 read status */

const openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", function() {
document.getElementById("bookForm").style.display = "block";
openBtn.style.display = "none";
})

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
document.getElementById("bookForm").style.display = "none";
openBtn.style.display = "block";})

 /* Individual DELETE buttons: "You will need to associate your DOM elements with the actual book 
 objects in some way. One easy solution is giving them a data-attribute that corresponds to the 
 index of the library array.
 YHDISTÄ NAPPI EVENTLISTENERILLÄ SHOWDISPLAYIHIN MUUNMUASSA*/
 


 /* Individual buttons to change READ status: "To facilitate this you will want to create the 
 function that toggles a book’s read status on your Book prototype instance." */



