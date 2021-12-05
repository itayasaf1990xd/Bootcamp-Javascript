const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let millisecondsInterval;
let secondsInterval;
let minutesInterval;

const milliseconds = {
  element: document.querySelector(".milliseconds"),
  counter: 0,
};

const seconds = {
  element: document.querySelector(".seconds"),
  counter: 0,
};

const minutes = {
  element: document.querySelector(".minutes"),
  counter: 0,
};

function timeCount(unit, count) {
  if (unit.counter === count) {
    unit.counter = 0;
  } else {
    unit.counter += 1;
  }
  unit.element.textContent = `${unit.counter}`.padStart(2, "0");
}

startButton.addEventListener("input", (event) => {
  millisecondsInterval = setInterval(() => {
    timeCount(milliseconds, 99);
  }, 10);
  secondsInterval = setInterval(() => {
    timeCount(seconds, 59);
  }, 1000);
  minutesInterval = setInterval(() => {
    timeCount(minutes, 59);
  }, 60000);
});

stopButton.addEventListener("input", (event) => {
  if (millisecondsInterval && secondsInterval && minutesInterval) {
    clearInterval(millisecondsInterval);
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
  }
});

const consoleTimer = () => {
  setInterval(() => {
    console.clear();
    let dateTime = new Date();
    let formatTime = [
      dateTime.getHours(),
      dateTime.getMinutes(),
      dateTime.getSeconds(),
    ]
      .map((val) => val.toString().padStart(2, "0"))
      .join(":");
    console.log(formatTime);
  }, 1000);
};
