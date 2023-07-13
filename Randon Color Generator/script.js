const containerEl = document.getElementById("container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.append(colorContainerEl);
}

const colorContainerEl = document.querySelectorAll(".color-container");

function generateColor() {
  colorContainerEl.forEach((colorContainerEl) => {
    const newColorCode = RandomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

generateColor();

function RandomColor() {
  const chars = "0123456789abcdef";
  const colorcodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorcodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
