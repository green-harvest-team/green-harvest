// Main JS
const menuOpenButton = document.getElementById("menu-open-button");
const menuHamburger = document.getElementById("hamburger-menu");
const menuCloseButton = document.getElementById("menu-close-button");
menuOpenButton.addEventListener("click", function () {
  menuHamburger.classList.add("is-open");
});
menuCloseButton.addEventListener("click", function () {
  menuHamburger.classList.remove("is-open");
});
