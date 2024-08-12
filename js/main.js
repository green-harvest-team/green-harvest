// Main JS
const menuOpenButton = document.querySelector("#menu-open-button");
const menuHamburger = document.querySelector("#hamburger-menu");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  menuHamburger.classList.add("is-open");
});

menuCloseButton.addEventListener("click", () => {
  menuHamburger.classList.remove("is-open");
});
