"use strict";
const form = () => {
  const inputs = document.querySelectorAll("input");
  // Функция для валидации кириллицы, дефиса и пробела
  function checkCyrillic(input) {
    return /^[\u0400-\u04FF\- ]*$/i.test(input);
  }

  // Функция для валидации латиницы, цифр и спецсимволов
  function checkLatin(input) {
    return /^[a-zA-Z0-9@_.!~*' \-]*$/.test(input);
  }

  // Функция для валидации номера телефона
  function checkPhone(input) {
    return /^[0-9()+\-]*$/.test(input);
  }

  // Для каждого поля ввода привязываем обработчик события input
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Получаем значение поля ввода
      const value = this.value;
      // Проверяем тип поля и вызываем соответствующую функцию валидации
      if (this.type === "text") {
        if (!checkCyrillic(value)) {
          this.setCustomValidity(
            "Пожалуйста, используйте nmтолько кириллицу, дефис и пробел"
          );
        } else {
          this.setCustomValidity("");
        }
      } else if (this.type === "email") {
        if (!checkLatin(value)) {
          this.setCustomValidity(
            "Пожалуйста, введите корректный email адрес (в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * ')"
          );
        } else {
          this.setCustomValidity("");
        }
      } else if (this.type === "tel") {
        if (!checkPhone(value)) {
          this.setCustomValidity(
            "Пожалуйста, используйте только цифры, скобки и дефис"
          );
        } else {
          this.setCustomValidity("");
        }
      }
    });
  });
};

export default form;
