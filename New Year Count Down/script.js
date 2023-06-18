const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("second");

const NewYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
//   console.log(now, NewYearTime);
  const gap = NewYearTime - now;
  console.log(gap);

  const second = 1000;  // 1second = 1000millisecond
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  // console.log(d);

  const h = Math.floor((gap % day) / hour);

  const m = Math.floor((gap % hour) / minute);

  const s = Math.floor((gap % minute) / second);

  dayElement.innerText = d;
  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;

  setTimeout(updateCountdown, 1000);
}
