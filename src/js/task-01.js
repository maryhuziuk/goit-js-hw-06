const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  console.log(``);
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.lastElementChild.querySelectorAll("li").length}`
  );
});
