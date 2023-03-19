function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

changeColorButton.addEventListener("click", onClickChangeColor);

function onClickChangeColor(event) {
  const newColor = getRandomHexColor();
  colorSpan.textContent = newColor;
  body.style = `background-color: ${newColor}`;
}
