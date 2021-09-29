/* CREATE the god damn basic layout so you can make a form*/


/* Create an ARRAY, which takes the books (and their data) as an OBJECT. And create a
function to take user INPUT and do that. Use HTML FORM in a div.*/
let myLibrary = [
    {title: "Harry Potter",
author: "J.K. Rowling",
pages: 243,
read: "read"},
{title: "The hobbit",
author: "J.R.R. Tolkien",
pages: 176,
read: "not read"},
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
  
        /*if (read.checked) {
            return read = "read";
        } else {
            return read = "Not read";
        }*/
        console.log(read);

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    form.reset();
    console.log(myLibrary);
    event.preventDefault();
showDisplay();
}

console.log(myLibrary);

/* Create a LOOP that goes through the array and shows every book on the page (or in a cards).
 Might be easier to add few books manually.*/

function showDisplay() {

const display = document.querySelector(".display");
display.innerHTML = "";

for (i = 0; i < myLibrary.length; i++) {
const card = document.createElement('div');
card.classList.add("card");
const cardTitle = document.createElement("h3");
const cardAuthor = document.createElement("p");
const cardPages = document.createElement("p");

for (let item in myLibrary[i]) {
cardTitle.textContent = (myLibrary[i].title);
cardAuthor.textContent = (myLibrary[i].author);
cardPages.textContent = (myLibrary[i].pages) + " pages";
}
card.appendChild(cardTitle);
card.appendChild(cardAuthor);
card.appendChild(cardPages);
display.appendChild(card);
}
}

showDisplay();


 /* NEW BOOK button, which brings up a FORM, which takes new book: author, title, pages and
 read status */



 /* Individual DELETE buttons: "You will need to associate your DOM elements with the actual book 
 objects in some way. One easy solution is giving them a data-attribute that corresponds to the 
 index of the library array.*/



 /* Individual buttons to change READ status: "To facilitate this you will want to create the 
 function that toggles a book’s read status on your Book prototype instance." */