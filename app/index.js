console.log("wiii");
/* ---------------------
GLOBAL VARIABLES:
----------------------*/
let allBooks = [];
let allIds = [];

/* ---------------------
Options:
----------------------*/
const options = {
  method: "GET",
};

/* ---------------------
Fetching the books:
----------------------*/
// fetch("https://striveschool-api.herokuapp.com/books", options)
//   .then((response) => response.json())
//   .then((booksArray) => {
//     console.log(booksArray);
//   });

// EX1:
const fetchBooks = async () => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/books`, options);
    const booksArray = await response.json();
    console.log(booksArray);
    allBooks = booksArray; // we have a copy of the booksArray
    displayAllBooks(); // we load the books
  } catch (error) {
    console.error(error);
  }
};

window.onload = () => {
  fetchBooks();
};

/* ---------------------
DOM elements:
----------------------*/
const container = document.getElementById("container");
const row = document.getElementById("row");

const cart = document.getElementById("cart"); // cart div

// CARD BUTTONS:
let allAddBtns = document.querySelectorAll(".addToCart-btn");
let allSkipBtns = document.querySelectorAll(".removeBook-btn");

// asin codes
let uniqueIds = document.querySelectorAll(".uniqueIds");

/* ----------------------------------------------------------------------
Ex2 & 3:
- Display all the books using template literals and .forEach() or .map()
- Add an add to cart button into each item
-----------------------------------------------------------------------*/
const displayAllBooks = () => {
  allBooks.forEach((book) => {
    row.innerHTML += `<div class="cal12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card"">
                          <img src="${book.img}" class="card-img-top card-image" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text uniqueIds">${book.asin}</p>
                            <button type="button" class="btn btn-dark addToCart-btn" id="addToCartBtn"
                            onclick="addToCart('${book.title}', '${book.asin}', '${book.price}','${book.category}')"
                            >Add to cart</button>
                            <button type="button" class="btn btn-danger removeBook-btn" id="removeBookBtn">Skip</button>

                            <span class="badge badge-pill badge-warning badge-card-added">Added to cart</span>
                          </div>
                        </div>
                      </div>`;

    allIds.push(book.asin);
  });
  // for (let i = 0; i < allBooks.length; i++) {
  //   row.innerHTML += `<div class="cal12 col-sm-6 col-md-4 col-lg-3">
  //                       <div class="card"">
  //                         <img src="${allBooks[i].img}" class="card-img-top card-image" alt="...">
  //                         <div class="card-body">
  //                           <h5 class="card-title">${allBooks[i].title}</h5>
  //                           <p class="card-text uniqueIds">${allBooks[i].asin}</p>
  //                           <button type="button" class="btn btn-dark addToCart-btn" id="addToCartBtn"
  //                           onclick="${addToCart(allBooks[i])}"
  //                           >Add to cart</button>
  //                           <button type="button" class="btn btn-danger removeBook-btn" id="removeBookBtn">Skip</button>

  //                           <span class="badge badge-pill badge-warning badge-card-added">Added to cart</span>
  //                         </div>
  //                       </div>
  //                     </div>`;

  //allIds.push(book.asin);
  //}

  allAddBtns = document.querySelectorAll(".addToCart-btn");
  allSkipBtns = document.querySelectorAll(".removeBook-btn");
  uniqueIds = document.querySelectorAll(".uniqueIds");
};

/* ----------------------------------------------------------------------
Ex4 & 5 & 6:
- When this button is pressed: 1) add the item to another list (the cart), 
  and 2) change the card styling to show that the element is in the cart 
  (eg. red border, a badge, an icon??? you choose)

- Add a skip button inside each card

- When pressed, this button should remove that book element from the page
-----------------------------------------------------------------------*/

// allAddBtns = document.querySelectorAll(".addToCart-btn");
// allSkipBtns = document.querySelectorAll(".removeBook-btn");

// uniqueIds = document.querySelectorAll(".uniqueIds");
console.log({ allAddBtns });
console.log({ allBooks });
const addToCart = (title, asin, price, category) => {
  //for (let i = 0; i < allAddBtns.length; i++) {
  //console.log(allAddBtns[i]);
  //allAddBtns[i].addEventListener("click", () => {
  cart.innerHTML = `
                        <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">${title}</h5>
                          <small>${asin}</small>
                        </div>
                        <p class="mb-1">${category}</p>
                        <small>$${price}</small>
                      </a>`;
  //});
  //}
};
//addToCart();
