console.log(
  `Number of categories: ${
    document.getElementById("categories").children.length
  }`
);
const namesOfCategory = document.querySelectorAll(".item h2");
const itemsInCategories = document.querySelectorAll(".item ul");

namesOfCategory.forEach((el, index) => {
  const quantityOfItemsInCategories = itemsInCategories[index];
  console.log(
    `Category: ${el.textContent}\nElements: ${quantityOfItemsInCategories.children.length}`
  );
});
