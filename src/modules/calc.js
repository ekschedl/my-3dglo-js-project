"use strict";
const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  console.log(price);
  console.log(calcType);
  console.log(calcSquare);
  console.log(calcCount);
  console.log(calcDay);
  console.log(total);

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

  const countCalc = () => {
    console.log(calc);
    const calcTypeValue = calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
    // console.log(calcType.options[calcType.selectedIndex].value);
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    total.textContent = totalValue;
    calcSquare;
  };

  calcBlock.addEventListener("input", (e) => {
    // countCalc();
    console.log(e.target);
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
