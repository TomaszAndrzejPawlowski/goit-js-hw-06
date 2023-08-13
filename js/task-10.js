function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainter = document.querySelector("#boxes");
const numberInput = document.querySelector("#controls").firstElementChild;
const createBoxesBtn = document.querySelector("#controls button[data-create]");
const destroyBoxesBtn = document.querySelector(
  "#controls button[data-destroy]"
);

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    boxesContainter.insertAdjacentHTML(
      "beforeend",
      `<div style="margin-bottom:5px; font-size:calc(6px + (${i} * 2px)); background-color:${getRandomHexColor()}; width:calc(30px + (${i} * 10px)); height:calc(30px + (${i} * 10px))">${getRandomHexColor()}</div>`
    );
  }
};

createBoxesBtn.addEventListener("click", () => {
  if (numberInput.value < 1) {
    numberInput.value = 1;
  } else if (numberInput.value > 100) {
    numberInput.value = 100;
  }
  createBoxes(numberInput.value);
});

const destroyBoxes = () => {
  boxesContainter.innerHTML = "";
};

destroyBoxesBtn.addEventListener("click", destroyBoxes);
