const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsRef = document.querySelector("#ingredients");

const ingredientsSort = ingredients.map((ingredient) => {
  const createEl = document.createElement("li");
  createEl.classList = "item";
  createEl.textContent = ingredient;
  return createEl;
});
ingredientsRef.append(...ingredientsSort);
