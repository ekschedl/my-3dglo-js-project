const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      fadeIn(modal);
    });
  });

  closeBtn.addEventListener("click", () => {
    fadeOut(modal);
  });

  document.querySelector(".popup").classList.add("active");
};

const fadeIn = (element) => {
  let opacity = 0;
  const fadeInAnimation = () => {
    opacity += 0.05; // Увеличиваем прозрачность на 0.05 за каждый кадр
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
    opacity -= 0.05; // Уменьшаем прозрачность на 0.05 за каждый кадр
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
