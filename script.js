"use strict";
// export let cart;
let addToCartBtn = document.querySelectorAll("a");
let container = document.querySelector(".container");
let cartNo = document.querySelector(".cartNo");
cartNo.textContent = localStorage.length;
///////////////////////////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", `https://fakestoreapi.com/products`);
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  data.forEach((prod) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="box">
    <img src="${prod.image}" />
    <h2>${prod.title}</h2>
    <p>${prod.description}</p>
    <span>${prod.price} $</span>
    <div class="rate">
    <i class="filled fas fa-star"></i>
      <i class="filled fas fa-star"></i>
      <i class="filled fas fa-star"></i>
      <i class="filled fas fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </div>
    <div class="options">
      <a onclick="addCart(${prod.id},event)" href="#">Add to Cart</a>
    </div>
  </div>`
    );
  });
});

let addCart = function (id, title) {
  title.preventDefault();
  localStorage.setItem(id, title);
  cartNo.textContent++;
};
