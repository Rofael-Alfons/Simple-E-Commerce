"use strict";
let container = document.querySelector(".container");
let favourite = Object.keys(localStorage);
let totalPrice = document.querySelector(".total");
let total = 0;
let data;
window.addEventListener("load", function () {
  const request = new XMLHttpRequest();
  request.open("GET", `https://fakestoreapi.com/products`);
  request.send();

  request.addEventListener("load", function () {
    data = JSON.parse(this.responseText);
    data.forEach((prod) => {
      favourite.forEach((fav) => {
        if (prod.id == fav) {
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
              <a onclick="deleteItem(${prod.id},${prod.price},event)" href="#">Delete</a>
            </div>
          </div>`
          );
          total += Number(prod.price);
          totalPrice.textContent = `Total Price is ${total.toFixed(2)}`;
        }
      });
    });
  });
});

let deleteItem = function (id, price, e) {
  e.preventDefault();
  localStorage.removeItem(`${id}`);
  document.querySelector(".box").remove();
  totalPrice.textContent = `Total Price is ${(total - price).toFixed(2)}`;
};
