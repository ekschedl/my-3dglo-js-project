"use strict";
const calc = () => {
  const calcBlock = document.querySelector(".calc-block");

  calcBlock.addEventListener("input", (event) => {
    const target = event.target;
    if (
      target.classList.contains("calc-square") ||
      target.classList.contains("calc-count") ||
      target.classList.contains("calc-day")
    ) {
      target.value = target.value.replace(/\D+/g, ""); // Заменяем все нецифровые символы
      console.log(target.value);
    }
  });
};

export default calc;
