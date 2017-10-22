"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelector(".hit__button");
    const modal = document.querySelector(".modal-wrapper");
    const modalButton = modal.querySelector(".modal__button");

    const clickHandler = (evt) => {
        evt.preventDefault();

        modal.classList.remove("modal-wrapper--opened");
        modalButton.removeEventListener("click", clickHandler);
    };

    orderButton.addEventListener("click", (evt) => {
        evt.preventDefault();

        if (!modal.classList.contains("modal-wrapper--opened")) {
            modal.classList.add("modal-wrapper--opened");
            modalButton.addEventListener("click", clickHandler);
        }
    });
});