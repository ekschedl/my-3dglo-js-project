"use strict";
// Получаем текущую дату и время
const currentDate = new Date();

// Получаем текущий час
const currentHour = currentDate.getHours();

// Определяем время суток
let timeOfDay;
if (currentHour < 12) {
  timeOfDay = "утро";
} else if (currentHour < 18) {
  timeOfDay = "день";
} else if (currentHour < 22) {
  timeOfDay = "вечер";
} else {
  timeOfDay = "ночь";
}

// Получаем текущий день недели
const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

// Форматируем текущее время
const hours = (currentDate.getHours() % 12 || 12).toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
const seconds = currentDate.getSeconds().toString().padStart(2, "0");
const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;

// Получаем количество дней до нового года
const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
const daysToNewYear = Math.floor(
  (newYear - currentDate) / (1000 * 60 * 60 * 24)
);

// Выводим на страницу
document.getElementById(
  "currentTime"
).textContent = `Сейчас ${timeOfDay}, ${currentDayOfWeek}, ${currentTime}`;
document.getElementById(
  "daysToNewYear"
).textContent = `До нового года осталось ${daysToNewYear} дней`;
