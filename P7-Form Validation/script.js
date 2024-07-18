document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Username validation
  const username = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  if (username.value.trim() === "") {
    username.classList.add("invalid");
    usernameError.style.display = "inline";
    isValid = false;
  } else {
    username.classList.remove("invalid");
    usernameError.style.display = "none";
  }

  // Email validation
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("invalid");
    emailError.style.display = "inline";
    isValid = false;
  } else {
    email.classList.remove("invalid");
    emailError.style.display = "none";
  }

  // Password validation
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (password.value.trim().length < 6) {
    password.classList.add("invalid");
    passwordError.style.display = "inline";
    isValid = false;
  } else {
    password.classList.remove("invalid");
    passwordError.style.display = "none";
  }
});
