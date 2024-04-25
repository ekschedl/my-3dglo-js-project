"use strict";
import { animate } from "./helpers";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  calcBlock.addEventListener("input", (event) => {
    const target = event.target;
    if (
      target.classList.contains("calc-square") ||
      target.classList.contains("calc-count") ||
      target.classList.contains("calc-day")
    ) {
      target.value = target.value.replace(/\D+/g, ""); // Заменяем все нецифровые символы
    }
  });

  const countCalc = () => {
    const calcTypeValue = calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
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

    animate({
      // Вызываем функцию animate для анимации изменения total
      duration: 500, // Продолжительность анимации в миллисекундах
      timing(timeFraction) {
        return timeFraction; // Линейная функция изменения состояния анимации
      },
      draw(progress) {
        total.textContent = (totalValue * progress).toFixed(2); // Обновляем значение total на каждом шаге анимации
      },
    });
  };

  calcBlock.addEventListener("input", (e) => {
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
