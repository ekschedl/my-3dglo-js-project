import { log } from "neo-async";

const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimerRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = Math.floor(timeRemaining % 60);

    // Добавляем нули перед однозначными значениями
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return {
      timeRemaining,
      formattedHours,
      formattedMinutes,
      formattedSeconds,
    };
  };

  let getTime = getTimerRemaining(); // Получаем время до начала работы интервала

  if (getTime.timeRemaining <= 0) {
    // Если время уже прошло, устанавливаем таймер на 00:00:00
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  } else {
    // Иначе, если время еще не прошло, запускаем интервал
    const updateClock = () => {
      getTime = getTimerRemaining();
      timerHours.textContent = getTime.formattedHours;
      timerMinutes.textContent = getTime.formattedMinutes;
      timerSeconds.textContent = getTime.formattedSeconds;
    };

    updateClock(); // Вызываем один раз для обновления времени перед запуском setInterval

    let timerInterval = setInterval(() => {
      getTime = getTimerRemaining();
      if (getTime.timeRemaining <= 0) {
        clearInterval(timerInterval); // Остановить интервал, если время истекло
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      } else {
        updateClock(); // Обновить время
      }
    }, 1000); // Вызываем каждую секунду
  }
};

export default timer;
