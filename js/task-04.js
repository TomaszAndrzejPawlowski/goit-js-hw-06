const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;
const currentValue = decrementBtn.nextElementSibling;

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  return (currentValue.textContent = `${counterValue}`);
};
const decrement = () => {
  counterValue -= 1;
  return (currentValue.textContent = `${counterValue}`);
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
currentValue.textContent = `${counterValue}`;
