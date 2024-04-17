const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");

  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");
  console.log(closeBtn);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
export default modal;
