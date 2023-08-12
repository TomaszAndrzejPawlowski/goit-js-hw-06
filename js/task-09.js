function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");

colorChangeBtn.addEventListener("click", () => {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = `${currentColor}`;
  colorValue.textContent = `${currentColor}`;
});
