describe("Login Form Tests", function () {
  var element;

  beforeEach(function () {
    // Create a new HTML element and append it to the document
    element = document.createElement("div");
    element.innerHTML = `
      <h2>Login Form</h2>
      <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value="password"><br><br>
        <input type="submit" value="Login">
      </form>
    `;
    document.body.appendChild(element);
  });

  afterEach(function () {
    // Remove the HTML element `form` after each test block
    document.body.removeChild(element);
  });

  it("should have a username field", function () {
    // Test that the form has a username field
    expect(document.querySelector("#login-form input[name='username']")).not.toBeNull();
  });

  it("should have a password field", function () {
    // Test that the form has a password field
    expect(document.querySelector("#login-form input[name='password']")).not.toBeNull();
  });

  it("should submit the form", function () {
    // Test that the form can be submitted
    var form = document.querySelector("#login-form");
    var submitSpy = jasmine.createSpy("submitSpy");
    form.addEventListener("submit", submitSpy);
    form.dispatchEvent(new Event("submit"));
    expect(submitSpy).toHaveBeenCalled();
  });

  it("should submit the form with [correct credentials](poe://www.poe.com/_api/key_phrase?phrase=correct%20credentials&prompt=Tell%20me%20more%20about%20correct%20credentials.)", function () {
    // Test that the form can be submitted with correct credentials
    var form = document.querySelector("#login-form");
    var submitSpy = jasmine.createSpy("submitSpy");
    form.addEventListener("submit", function (event) {
      if (!validateLogin(event.target)) {
        event.preventDefault();
      }
      submitSpy();
    });
    document.querySelector("#username").value = "admin";
    document.querySelector("#password").value = "password";
    form.dispatchEvent(new Event("submit"));
    setTimeout(function () {
      expect(submitSpy).toHaveBeenCalled();
      done();
    }, 1000);
  });

  it("should not submit the form with wrong credentials", function () {
    // Test that the form cannot be submitted with wrong credentials
    var form = document.querySelector("#login-form");
    var submitSpy = jasmine.createSpy("submitSpy");
    form.addEventListener("submit", function (event) {
      if (!validateLogin(event.target)) {
        event.preventDefault();
      }
      submitSpy();
    });
    document.querySelector("#username").value = "wrong";
    document.querySelector("#password").value = "wrong";
    form.dispatchEvent(new Event("submit"));
    setTimeout(function () {
      expect(submitSpy).not.toHaveBeenCalled();
      done();
    }, 1000);
  });

  it("should not submit the form with null input", function () {
    // Test that the form cannot be submitted with null input
    var form = document.querySelector("#login-form");
    var submitSpy = jasmine.createSpy("submitSpy");
    form.addEventListener("submit", function (event) {
      if (!validateLogin(event.target)) {
        event.preventDefault();
      }
      submitSpy();
    });
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    form.dispatchEvent(new Event("submit"));
    setTimeout(function () {
      expect(submitSpy).not.toHaveBeenCalled();
      done();
    }, 1000);
  });
});

export function validateLogin(form) {
  // Get the values of the username and password inputs
  var username = form.username.value;
  var password = form.password.value;

  // Check if the inputs are not empty and match a valid set of credentials
  if (username !== "" && password !== "") {
    if (username === "admin" && password === "password") {
      return true;
    }
  }

  // Return false if the inputs are empty or invalid
  return false;
}
