// Main JS
const menuOpenButton = document.querySelector("#menu-open-button");
const menuHamburger = document.querySelector("#hamburger-menu");
const menuCloseButton = document.querySelector("#menu-close-button");
const shopButton = document.querySelector(".header-navbar-button");
const mobileShopBtn = document.querySelector(".header-menu-shop-button");
const thankYou = document.querySelector(".thanks-modal");
const closeThanksModal = document.querySelector(".thanks-modal-close");

menuOpenButton.addEventListener("click", () => {
  menuHamburger.classList.add("is-open");
  document.body.classList.add("no-scroll");
});

menuCloseButton.addEventListener("click", () => {
  menuHamburger.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
});

shopButton.addEventListener("click", () => {
  console.log("Bizi sectiginiz icin tesekkur ederiz...");
  thankYou.classList.remove("is-close-thanks-modal");
});
mobileShopBtn.addEventListener("click", () => {
  console.log("Bizi sectiginiz icin tesekkur ederiz...");
  thankYou.classList.remove("is-close-thanks-modal");
});
closeThanksModal.addEventListener("click", () => {
  console.log("Bizi sectiginiz icin tesekkur ederiz...");
  thankYou.classList.add("is-close-thanks-modal");
});
document.addEventListener("click", (event) => {
  if (event.target === thankYou) {
    thankYou.classList.add("is-close-thanks-modal");
  }
});
