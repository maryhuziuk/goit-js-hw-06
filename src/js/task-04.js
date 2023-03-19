// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2/ Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue

const decrement = document.querySelector('button[ data-action="decrement"]');
const increment = document.querySelector('button[ data-action="increment"]');

decrement.addEventListener("click", onDecrementButton);
increment.addEventListener("click", onIncrementButton);

function onDecrementButton(event) {
  const value = document.getElementById("value");
  value.textContent = parseInt(value.textContent) - 1;
}

function onIncrementButton(event) {
  const value = document.getElementById("value");
  value.textContent = parseInt(value.textContent) + 1;
}
