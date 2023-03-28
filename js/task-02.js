const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((el) => {
  const elLi = document.createElement("li");
  elLi.textContent = el;
  elLi.setAttribute("class", "item");
  document.getElementById("ingredients").append(elLi);
});
