const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = item;

  return ingredient;
});

console.log(elements);

list.append(...elements);
