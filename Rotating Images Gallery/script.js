const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#Next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

const updateGallery = () => {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
};

updateGallery();
