const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");

  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");
  console.log(closeBtn);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.toggle("active");
      if (modal.classList.contains("active")) {
        modal.style.display = "block";
        modal.style.backgroundColor = "rgba(1, 64, 0, 0.5)";
        modal.style.transition = "opacity 0.3s ease";
      } else {
        modal.style.backgroundColor = "transparent";
        modal.style.transition = "";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("active");
    modal.style.backgroundColor = "transparent";
    modal.style.transition = "";
  });
};

export default modal;
