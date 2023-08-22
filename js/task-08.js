const loginForm = document.querySelector(".login-form");

const loginData = {};
console.log(loginData);
const onSubmit = (onClick) => {
  onClick.preventDefault();
  const {
    elements: { email, password },
  } = onClick.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }

  loginData.email = email.value;
  loginData.password = password.value;

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  onClick.currentTarget.reset();
  console.log(loginData);
};

loginForm.addEventListener("submit", onSubmit);
