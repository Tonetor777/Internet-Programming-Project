  function validateForm() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var passwordError = document.getElementById("passwordError");

 // Confirm password match
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


 // strong password validation
//const passwordInput = document.getElementById('password');
password.addEventListener('input', function() {
    
  if (!isStrongPassword(password.value)) {
    document.getElementById('sError').innerText = "Password must contain at least 8 characters, \n  one uppercase letter, \n one lowercase letter, \n one number, and \n one special character.";
  } else {
    document.getElementById('sError').innerText = "";
  }
});

//const pattern = new RegExp("[a-z]")
//const pattern2 = /[a-z]/
 
// password validation function
function isStrongPassword(password) {
  return password.length >= 8 &&             
         /[a-z]/.test(password) &&         
         /[A-Z]/.test(password) &&          
         /\d/.test(password) &&         
         /[!@#$%^&*]/.test(password);       
}
