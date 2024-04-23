const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (window.innerWidth >= 768) {
        fadeIn(modal);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    if (window.innerWidth >= 768) {
      fadeOut(modal);
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

  // document.querySelector(".popup").classList.add("active");
};

const fadeIn = (element) => {
  let opacity = 0;
  const fadeInAnimation = () => {
    opacity += 0.05;
    element.style.opacity = opacity;
    if (opacity < 1) {
      requestAnimationFrame(fadeInAnimation);
    }
  };
  requestAnimationFrame(fadeInAnimation);
};

const fadeOut = (element) => {
  let opacity = 1;
  const fadeOutAnimation = () => {
    opacity -= 0.05;
    element.style.opacity = opacity;
    if (opacity > 0) {
      requestAnimationFrame(fadeOutAnimation);
    } else {
      element.style.display = "none";
    }
  };
  requestAnimationFrame(fadeOutAnimation);
};

export default modal;
