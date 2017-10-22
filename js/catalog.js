"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var ESCAPE_KEY_CODE = 27;

    var icons = document.querySelectorAll(".catalog__icon-wrapper");
    var modal = document.querySelector(".modal-wrapper");
    var modalButton = modal.querySelector(".modal__button");

    var clickHandler = function (evt) {
        evt.preventDefault();

        modal.classList.remove("modal-wrapper--opened");
        modalButton.removeEventListener("click", clickHandler);
    };

    [].slice.call(icons).forEach(function (icon) {
        icon.addEventListener("click", function () {
            if (!modal.classList.contains("modal-wrapper--opened")) {
                modal.classList.add("modal-wrapper--opened");
                modalButton.addEventListener("click", clickHandler);
                document.addEventListener('keydown', function (evt) {
                    if (evt.keyCode === ESCAPE_KEY_CODE) {
                        clickHandler(evt);
                    }
                });
            }
        });
    });
});
