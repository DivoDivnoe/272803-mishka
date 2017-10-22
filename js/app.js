"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const mainNav = document.querySelector(".main-nav");
    const mainNavList = mainNav.querySelector(".main-nav__list");

    mainNavList.classList.remove("no-js");
    mainNav.querySelector(".main-nav__toggle").addEventListener("click", function () {
        mainNav.classList.toggle("main-nav--opened");
    });
});
