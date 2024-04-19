/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"23 april 2024\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://my-3dglo-js-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst calc = () => {\n  const calcBlock = document.querySelector(\".calc-block\");\n\n  calcBlock.addEventListener(\"input\", (event) => {\n    const target = event.target;\n    if (\n      target.classList.contains(\"calc-square\") ||\n      target.classList.contains(\"calc-count\") ||\n      target.classList.contains(\"calc-day\")\n    ) {\n      target.value = target.value.replace(/\\D+/g, \"\"); // Заменяем все нецифровые символы\n      console.log(target.value);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n\n//# sourceURL=webpack://my-3dglo-js-project/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst form = () => {\n  const inputs = document.querySelectorAll(\"input\");\n  // Функция для валидации кириллицы, дефиса и пробела\n  function checkCyrillic(input) {\n    return /^[\\u0400-\\u04FF\\- ]*$/i.test(input);\n  }\n\n  // Функция для валидации латиницы, цифр и спецсимволов\n  function checkLatin(input) {\n    return /^[a-zA-Z0-9@_.!~*' \\-]*$/.test(input);\n  }\n\n  // Функция для валидации номера телефона\n  function checkPhone(input) {\n    return /^[0-9()+\\-]*$/.test(input);\n  }\n\n  // Для каждого поля ввода привязываем обработчик события input\n  inputs.forEach((input) => {\n    input.addEventListener(\"input\", function () {\n      // Получаем значение поля ввода\n      const value = this.value;\n      // Проверяем тип поля и вызываем соответствующую функцию валидации\n      if (this.type === \"text\") {\n        if (!checkCyrillic(value)) {\n          this.setCustomValidity(\n            \"Пожалуйста, используйте nmтолько кириллицу, дефис и пробел\"\n          );\n        } else {\n          this.setCustomValidity(\"\");\n        }\n      } else if (this.type === \"email\") {\n        if (!checkLatin(value)) {\n          this.setCustomValidity(\n            \"Пожалуйста, введите корректный email адрес (в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * ')\"\n          );\n        } else {\n          this.setCustomValidity(\"\");\n        }\n      } else if (this.type === \"tel\") {\n        if (!checkPhone(value)) {\n          this.setCustomValidity(\n            \"Пожалуйста, используйте только цифры, скобки и дефис\"\n          );\n        } else {\n          this.setCustomValidity(\"\");\n        }\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n\n//# sourceURL=webpack://my-3dglo-js-project/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menu = document.querySelector(\"menu\");\n  const closeBtn = menu.querySelector(\".close-btn\");\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\n\n  const handleMenu = () => {\n    //   if (!menu.style.transform) {\n    //     menu.style.transform = \"translateX(0)\";\n    //   } else menu.style.transform = \"\";\n    // или так\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  menuBtn.addEventListener(\"click\", handleMenu);\n\n  closeBtn.addEventListener(\"click\", handleMenu);\n\n  // можно так\n  // for (let i = 0; i < menuItems.length; i++) {\n  //   console.log(menuItems[i]);\n  //   menuItems[i].addEventListener(\"click\", handleMenu); // }\n\n  // а можно так\n  menuItems.forEach((menuItem) =>\n    menuItem.addEventListener(\"click\", handleMenu)\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://my-3dglo-js-project/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const modal = document.querySelector(\".popup\");\n  const closeBtn = modal.querySelector(\".popup-close\");\n\n  buttons.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      modal.style.display = \"block\";\n      if (window.innerWidth >= 768) {\n        fadeIn(modal);\n      }\n    });\n  });\n\n  closeBtn.addEventListener(\"click\", () => {\n    if (window.innerWidth >= 768) {\n      fadeOut(modal);\n    } else {\n      modal.style.display = \"none\";\n    }\n  });\n\n  document.querySelector(\".popup\").classList.add(\"active\");\n};\n\nconst fadeIn = (element) => {\n  let opacity = 0;\n  const fadeInAnimation = () => {\n    opacity += 0.05;\n    element.style.opacity = opacity;\n    if (opacity < 1) {\n      requestAnimationFrame(fadeInAnimation);\n    }\n  };\n  requestAnimationFrame(fadeInAnimation);\n};\n\nconst fadeOut = (element) => {\n  let opacity = 1;\n  const fadeOutAnimation = () => {\n    opacity -= 0.05;\n    element.style.opacity = opacity;\n    if (opacity > 0) {\n      requestAnimationFrame(fadeOutAnimation);\n    } else {\n      element.style.display = \"none\";\n    }\n  };\n  requestAnimationFrame(fadeOutAnimation);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack://my-3dglo-js-project/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  const getTimerRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let hours = Math.floor(timeRemaining / 3600);\n    let minutes = Math.floor((timeRemaining % 3600) / 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    // Добавляем нули перед однозначными значениями\n    hours = String(hours).padStart(2, \"0\");\n    minutes = String(minutes).padStart(2, \"0\");\n    seconds = String(seconds).padStart(2, \"0\");\n\n    return {\n      timeRemaining,\n      hours,\n      minutes,\n      seconds,\n    };\n  };\n\n  const updateClock = () => {\n    let getTime = getTimerRemaining();\n    timerHours.textContent = getTime.hours;\n    timerMinutes.textContent = getTime.minutes;\n    timerSeconds.textContent = getTime.seconds;\n  };\n\n  updateClock(); // Вызываем один раз для обновления времени перед запуском setInterval\n\n  let timerInterval = setInterval(() => {\n    let getTime = getTimerRemaining();\n    if (getTime.timeRemaining <= 0) {\n      clearInterval(timerInterval); // Остановить интервал, если время истекло\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    } else {\n      updateClock(); // Обновить время\n    }\n  }, 1000); // Вызываем каждую секунду\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack://my-3dglo-js-project/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;