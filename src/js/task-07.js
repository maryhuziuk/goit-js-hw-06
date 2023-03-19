const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  spanEl.style = `font-size: ${event.currentTarget.value}px;`;
}
