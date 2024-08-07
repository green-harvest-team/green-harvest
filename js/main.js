// Main JS

// Burger Menu Js (Onektir................................................................)
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
const navLinksArray = Array.from(navLinks.children);

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinksArray.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
