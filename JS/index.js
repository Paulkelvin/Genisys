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

  const links = document.querySelectorAll('a[href^="#"]'); // Select all links that start with "#"

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      const targetId = this.getAttribute("href"); // Get the href attribute
      const targetSection = document.querySelector(targetId); // Select the target section

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 120, // Adjust this value based on your fixed header size or other offsets
          behavior: "smooth",
        });
      }
    });
  });
});
