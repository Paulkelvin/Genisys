"use strict";

/* Smooth scrolling is handled natively via CSS (`scroll-behavior: smooth`
   plus `scroll-margin-top` on each section), so no scroll hijacking here. */

document.addEventListener("DOMContentLoaded", function () {
  // Current year in the footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Collapse the mobile menu after choosing a destination
  const navCollapse = document.getElementById("navbarSupportedContent");
  if (navCollapse) {
    navCollapse.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  // Stop room-tour media when its modal closes
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("hidden.bs.modal", () => {
      modal.querySelectorAll("video").forEach((video) => video.pause());
      modal.querySelectorAll("iframe").forEach((iframe) => {
        iframe.src = iframe.src; // eslint-disable-line no-self-assign
      });
    });
  });
});
