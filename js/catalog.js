"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".catalog__icon-wrapper");
    const modal = document.querySelector(".modal-wrapper");
    const modalButton = modal.querySelector(".modal__button");

    const clickHandler = (evt) => {
        evt.preventDefault();

        modal.classList.remove("modal-wrapper--opened");
        modalButton.removeEventListener("click", clickHandler);
    };

    [].slice.call(icons).forEach((icon) => {
        icon.addEventListener("click", () => {
            if (!modal.classList.contains("modal-wrapper--opened")) {
                modal.classList.add("modal-wrapper--opened");
                modalButton.addEventListener("click", clickHandler);
            }
        });
    });
});
