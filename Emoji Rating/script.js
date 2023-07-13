const starsEl = document.querySelectorAll(".fa-star");

starsEl.forEach((starsEl, index) => {
  starsEl.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starsEl, idx) => {
    if (idx < index + 1) {
      starsEl.classList.add("active");
    } else {
      starsEl.classList.remove('active')
    }
  });
}
