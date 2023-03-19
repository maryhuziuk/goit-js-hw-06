const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", validateLoginForm);

function validateLoginForm(event) {
  event.preventDefault();

  const fields = ["email", "password"];
  let submitForm = {};
  let isAnyFieldEmpty = false;

  for (let field of fields) {
    const value = event.currentTarget.elements[field].value;
    submitForm[field] = value;
    if (!value) {
      isAnyFieldEmpty = true;
    }
  }

  if (isAnyFieldEmpty) {
    alert("All fields are required");
  } else {
    console.log(submitForm);
    event.target.reset();
  }
}
