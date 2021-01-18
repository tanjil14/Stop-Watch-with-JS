const stopwatchCounterStart = document.getElementById("start");
const stopwatchCounterReset = document.getElementById("reset");
const stopwatchCounterPause = document.getElementById("pause");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let watchIsRunning = false;
let timer = null;
let sec = 0;
let min;

const start = () => {
  if (!watchIsRunning) {
    watchIsRunning = true;
    timer = setInterval(() => {
      sec++;
      let { min, second } = getTime(sec);
      minutes.textContent = min < 10 ? "0" + min : min;
      seconds.textContent = second < 10 ? "0" + second : second;
    }, 1000);
  }
};
const reset = () => {
  clearInterval(timer);
  min = 0;
  sec = 0;
  minutes.textContent = "00";
  seconds.textContent = "00";
  watchIsRunning = false;
};
const pause = () => {
  clearInterval(timer);
};
const getTime = (sec) => {
  min = parseInt(sec / 60);
  let second = parseInt(sec % 60);
  return {
    min,
    second,
  };
};
stopwatchCounterStart.addEventListener("click", start);
stopwatchCounterReset.addEventListener("click", reset);
stopwatchCounterPause.addEventListener("click", pause);
