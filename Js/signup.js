function validateForm() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var passwordError = document.getElementById("passwordError");

  if (password.value !== confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    passwordError.innerText = "Passwords do not match!";
    return false;
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    passwordError.innerText = "";
    return true;
  }
}
