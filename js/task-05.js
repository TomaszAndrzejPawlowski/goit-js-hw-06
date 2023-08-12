const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener("input", (name) => {
  nameOutput.textContent = name.currentTarget.value;
  if (name.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
});
