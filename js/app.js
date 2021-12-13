// REAVEAL ON SCROLL
window.addEventListener("load", function () {
  // ------------- Animation on scorll--------------
  AOS.init();
});

// Scroll on top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("scroll__totop");
  else scrollUp.classList.remove("scroll__totop");
}
window.addEventListener("scroll", scrollUp);

// Navbar Collapse
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("remove-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.add("remove-menu");
  });
}

function WhenScrollClose() {
  const WhenScrollClose = document.getElementById("nav-menu");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY > 5600) WhenScrollClose.classList.remove("remove-menu");
  else WhenScrollClose.classList.add("remove-menu");
}
window.addEventListener("scroll", WhenScrollClose);
