const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");

const trailerContainerEl = document.querySelector(".trailer-container");

const videoEl = document.querySelector("video");

console.log(btnEl);

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
