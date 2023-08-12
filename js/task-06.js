const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length < 6) {
    textInput.classList.add("invalid");
  } else if (textInput.value.length >= 6) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
});
