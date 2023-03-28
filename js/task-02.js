const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.forEach((el) => {
//   const elLi = document.createElement("li");
//   elLi.textContent = el;
//   elLi.setAttribute("class", "item");
//   document.getElementById("ingredients").append(elLi);
// });

const divs = Array.from({ length: ingredients.length }).map((_, i) => {
  let el = document.createElement("li");
  el.textContent = ingredients[i];
  el.setAttribute("class", "item");
  return el;
});
console.log(divs);
document.getElementById("ingredients").append(...divs);
