import { animate1 } from "./helpers";

const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (window.innerWidth >= 768) {
        animate1().fadeIn(modal);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    if (window.innerWidth >= 768) {
      animate1().fadeOut(modal);
    } else {
      modal.style.display = "none";
    }
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
