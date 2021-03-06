/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav__link");

function actionLink() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", actionLink));

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== QUESTIONS ACCORDION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

// Previously selected topic (if user selected)

// We obtain the current theme that the interface has by validating the dark-theme class

// We validate if the user previously chose a topic

// Activate / deactivate the theme manually with the button

/*=============== SCROLL REVEAL ANIMATION ===============*/
