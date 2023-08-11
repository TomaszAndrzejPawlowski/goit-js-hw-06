const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.className = "item";
  ingredientsList.append(listElement);
});
