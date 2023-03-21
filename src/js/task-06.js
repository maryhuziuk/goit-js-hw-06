const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputEl);

function onInputEl(event) {
  const defInputLength = parseInt(inputEl.dataset.length);
  event.currentTarget.className = "invalid";

  if (event.currentTarget.value.length === defInputLength) {
    event.currentTarget.className = "valid";
  }
}
