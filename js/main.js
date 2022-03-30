"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight:${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", event => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  scrollIntoviews(link);
});

// handle click on " contact me" button on home
const contBtn = document.querySelector(".home__contact");
contBtn.addEventListener("click", () => {
  scrollIntoviews("#contact");
});

// make home slowly fade to tranparent as the window scrolls down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(`homeHeight:${homeHeight}`);
  console.log(`homeHeight:${1 - window.scrollY / homeHeight}`);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoviews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
