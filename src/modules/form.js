"use strict";

const form = () => {
  const inputs = document.querySelectorAll("input");

  // Функция для валидации кириллицы, дефиса и пробела
  const checkCyrillic = (input) => {
    return /^[\u0400-\u04FF\- ]*$/i.test(input);
  };

  // Функция для валидации латиницы, цифр и спецсимволов
  const checkLatin = (input) => {
    return /^[a-zA-Z0-9@_.!~*' \-]*$/.test(input);
  };

  // Функция для валидации номера телефона
  const checkPhone = (input) => {
    return /^[0-9()+\-]*$/.test(input);
  };

  // Для каждого поля ввода привязываем обработчик события input
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      // Получаем значение поля ввода
      const value = event.target.value;
      // Проверяем тип поля и вызываем соответствующую функцию валидации
      if (event.target.type === "text") {
        if (!checkCyrillic(value)) {
          event.target.setCustomValidity(
            "Пожалуйста, используйте только кириллицу, дефис и пробел"
          );
        } else {
          event.target.setCustomValidity("");
        }
      } else if (event.target.type === "email") {
        if (!checkLatin(value)) {
          event.target.setCustomValidity(
            "Пожалуйста, введите корректный email адрес (в любом регистре, цифры и спецсимволы: @ - _ . ! ~ * ')"
          );
        } else {
          event.target.setCustomValidity("");
        }
      } else if (event.target.type === "tel") {
        if (!checkPhone(value)) {
          event.target.setCustomValidity(
            "Пожалуйста, используйте только цифры, скобки и дефис"
          );
        } else {
          event.target.setCustomValidity("");
        }
      }
    });
  });
};

export default form;
