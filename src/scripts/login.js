document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      var usernameInput = document.getElementById("username");
      var passwordInput = document.getElementById("password");
  
      // Perform login validation
      var isValid = validateLogin(usernameInput.value, passwordInput.value);
      if (isValid) {
        console.log("Login successful");
        // Add your logic for successful login
      } else {
        console.log("Invalid username or password");
        // Add your logic for handling invalid login
      }
    });
  });
  
  function validateLogin(username, password) {
    // Add your login validation logic here
    // Return true if the login is valid, otherwise false
    return username === "admin" && password === "password";
  }
  