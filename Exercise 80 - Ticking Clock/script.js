const secondsDial = { element: document.querySelector(".second"), deg: 0 };
const minutesDial = { element: document.querySelector(".minute"), deg: 0 };
const hoursDial = { element: document.querySelector(".hour"), deg: 0 };
const second = 1000;
const minute = second * 60;
const hour = minute * 60;

function rotate(dial) {
  dial.deg += 6;
  dial.element.style.transform = `rotate(${dial.deg}deg)`;
}

setInterval(() => {
  rotate(secondsDial);
}, second);

setInterval(() => {
  rotate(minutesDial);
}, minute);

setInterval(() => {
  rotate(hoursDial);
}, hour);

const consoleClock = () => {
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
