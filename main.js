(() => {
  document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".popup-blackout");
    let modal = document.querySelector(".popup-modal");
    let button_close = document.querySelector(".popup__btn");

    let popupButtons = document.querySelectorAll(".open-popup");
    popupButtons.forEach((button) =>
      button.addEventListener("click", () => {
        container.classList.remove("visually-hidden");
        modal.classList.remove("visually-hidden");
      })
    );

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        container.classList.add("visually-hidden");
        modal.classList.add("visually-hidden");
      }
    });

    button_close.addEventListener("click", () => {
      console.log("hello");
      container.classList.add("visually-hidden");
      modal.classList.add("visually-hidden");
    });
  });
})();
