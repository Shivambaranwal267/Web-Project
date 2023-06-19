const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

const updateClock = () => {
  const currentDate = new Date();
  // console.log(currentDate);
  setTimeout(updateClock, 1000);
  // console.log(currentDate);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  // console.log(hour,minute,second);

  // convert to analog(degree)

  const hourDeg = (hour / 12) * 360;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 60) * 360;
  secondElement.style.transform = `rotate(${secondDeg}deg)`;
  console.log(secondElement); 

}

// updateClock();

setInterval(updateClock , 1000);
