const NavBarEl = document.querySelector(".navbar");

const BottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (
    window.scrollY >
    BottomContainerEl.offsetTop - NavBarEl.offsetHeight - 50
  ) {
    NavBarEl.classList.add("active");
  } else {
    NavBarEl.classList.remove("active");
  }
});
