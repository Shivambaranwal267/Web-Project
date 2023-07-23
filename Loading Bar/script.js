const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

let index = 0;

updateNum();

function updateNum() {
  counterEl.innerText = index + '%';
  barEl.style.width = index + "%";
  index++;
  if(index <= 100) {
    setTimeout(updateNum,10)
  }
}
