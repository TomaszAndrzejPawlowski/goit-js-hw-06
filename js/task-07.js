const fontHeightSlider = document.querySelector("#font-size-control");
const textAffectedBySlider = document.querySelector("#text");
textAffectedBySlider.style.fontSize = `${fontHeightSlider.value}px`;

fontHeightSlider.addEventListener("input", (height) => {
  textAffectedBySlider.style.fontSize = `${height.target.value}px`;
});
