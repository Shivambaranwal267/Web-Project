const hoursElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

const Updateclock = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";


  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  if(h == 0) {
    hr = 12;
    ampm = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //  OR
  /*
  if (h < 10) {
    h = "0" + h;
  }*/

  hoursElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;

  setTimeout(() => {
    Updateclock();
  }, 1000);
};

Updateclock();
