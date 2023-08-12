const loginForm = document.querySelector(".login-form");

const onSubmit = (onClick) => {
  onClick.preventDefault();
  const {
    elements: { email, password },
  } = onClick.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }
  onClick.currentTarget.reset();
};

loginForm.addEventListener("submit", onSubmit);
