const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimerRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    //let days = Math.floor(timeRemaining / 60 / 60 / 24);
    // let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      // hours: hours,
      // minutes: minutes,
      // seconds: seconds,
      //можно записать атакЮ
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimerRemaining();
    // console.log(getTime);
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  };
  updateClock();

  //setInterval(countTimer, 1000, "20 may 2024");
};

export default timer;
