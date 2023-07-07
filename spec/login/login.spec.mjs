import { checkValidity } from '../../src/scripts/login.js';

describe("Login Form", function() {
  var form;

  beforeEach(function() {
    // Tạo phần tử HTML `form` mới để sử dụng trong mỗi khối kiểm thử
    form = document.createElement('form');
    form.setAttribute('id', 'login-form');
    form.innerHTML = `
      <input type="text" id="username" name="username">
      <input type="password" id="password" name="password">
    `;
    document.body.appendChild(form);
  });

  afterEach(function() {
    // Xóa phần tử HTML `form` sau khi mỗi khối kiểm thử kết thúc
    document.body.removeChild(form);
  });

  it("should validate login with correct credentials", function() {
    // Simulate user input
    form.username.value = "admin";
    form.password.value = "password";

    // Trigger form submission
    form.submit();

    // Check if the form is valid
    expect(checkValidity(form)).toBe(true);
  });

  it("should display error for invalid username", function() {
    // Simulate user input
    form.username.value = "invalid";
    form.password.value = "password";

    // Trigger form submission
    form.submit();

    // Check if the form is invalid
    expect(checkValidity(form)).toBe(false);

    // Check if error message is displayed
    expect(form.username.validity.valueMissing).toBe(true);
  });

  it("should display error for invalid password", function() {
    // Simulate user input
    form.username.value = "admin";
    form.password.value = "invalid";

    // Trigger form submission
    form.submit();

    // Check if the form is invalid
    expect(checkValidity(form)).toBe(false);

    // Check if error message is displayed
    expect(form.password.validity.valueMissing).toBe(true);
  });
});
