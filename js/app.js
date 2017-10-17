'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.querySelector('.main-nav');
    const mainNavList  = mainNav.querySelector('.main-nav__list');

    mainNavList.classList.remove('no-js');
    mainNav.querySelector('.main-nav__toggle').addEventListener('click', () => {
        mainNavList.classList.toggle('main-nav__list--opened');
    });
});
