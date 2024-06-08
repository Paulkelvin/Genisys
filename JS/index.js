"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-main");

  function changeHeaderOnScroll() {
    const h1Position =
      document.querySelector("h1").getBoundingClientRect().top +
      window.scrollY -
      header.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= h1Position) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  }

  // Check the header status on initial load
  changeHeaderOnScroll();

  // Update on scroll
  window.addEventListener("scroll", changeHeaderOnScroll);
});
