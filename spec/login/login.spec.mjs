describe("Login Form Tests", function () {
  var element;

  beforeEach(function () {
    // Create a new HTML element and append it to the document
    element = document.createElement("div");
    element.innerHTML = `
      <h2>Login Form</h2>
      <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
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

  it("should submit the form with correct credentials", function () {
    // Test that the form can be submitted with correct credentials
    var form = document.querySelector("#login-form");
    let isValid;
    form.addEventListener("submit", function (event) {
      isValid = validateLogin(event.target);
    });
    form.username.value = "sa";
    form.password.value = "sa";
    form.dispatchEvent(new Event("submit"));

    expect(isValid).toBe(true);
  });

  it("should not submit the form with wrong credentials", function () {
    // Test that the form cannot be submitted with wrong credentials
    var form = document.querySelector("#login-form");
    let isValid;
    form.addEventListener("submit", function (event) {
      isValid = validateLogin(event.target);
    });
    form.username.value = "wrong";
    form.password.value = "wrong";
    form.dispatchEvent(new Event("submit"));

    expect(isValid).toBe(false);
  });

  it("should not submit the form with null input", function () {
    // Test that the form cannot be submitted with null input
    var form = document.querySelector("#login-form");
    let isValid;
    form.addEventListener("submit", function (event) {
      isValid = validateLogin(event.target);
    });
    form.username.value = "";
    form.password.value = "";
    form.dispatchEvent(new Event("submit"));

    expect(isValid).toBe(false);
  });
});

function validateLogin(form) {
  // Get the values of the username and password inputs
  var username = form.username.value;
  var password = form.password.value;
  // Check if the inputs are not empty and match a valid set of credentials
  if (username !== "" && password !== "") {
    return username === "sa" && password === "sa";
  }
  // Return false if the inputs are empty or invalid
  return false;
}
