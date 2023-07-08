document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("login-form");
  if (loginForm !== null) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      // Perform login validation
      var isValid = validateLogin(loginForm);
      if (isValid) {
        alert("Login successful");
        // Add your logic for successful login
      } else {
        alert("Invalid username or password");
        // Add your logic for handling invalid login
      }
    });
  }
});

function validateLogin(form) {
  // Get the values of the username and password inputs
  var username = form.username.value;
  var password = form.password.value;
  // Check if the inputs are not empty and match a valid set of credentials
  if (username !== "" && password !== "") {
    return username === "sa" && password === "sa";
  }
  // Return false if the inputs are empty
  return false;
}
