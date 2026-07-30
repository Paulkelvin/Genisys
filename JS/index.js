"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        e.preventDefault();
        const offset = header ? header.offsetHeight + 16 : 0;
        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
