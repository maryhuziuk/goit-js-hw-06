const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const elements = item.querySelectorAll("li");
  console.log(``);
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${elements.lastElementChild.length}`);
});
