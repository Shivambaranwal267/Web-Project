const nextEl = document.querySelector(".next");

const prevtEl = document.querySelector(".prev");

const imageContainerEl = document.querySelector(".image-container");

const imgEl = document.querySelectorAll("img");

let currImg = 1;

let timeout = "";

nextEl.addEventListener("click", () => {
  currImg++;
  clearTimeout(timeout)
  updateImg();
});

prevtEl.addEventListener("click", () => {
  currImg--;
  clearTimeout(timeout)
  updateImg();
});

updateImg();

function updateImg() {
  if (currImg > imgEl.length) {
    currImg = 1;
  } else if (currImg < 1) {
    currImg = imgEl.length - 1;
  }
  imageContainerEl.style.transform = `translateX(-${(currImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currImg++;
    updateImg();
  }, 3000);
}
