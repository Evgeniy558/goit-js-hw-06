function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCrreatEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const numberOfBoxes = document.querySelector("[type='number']");
const placeForBoxes = document.getElementById("boxes");

btnCrreatEl.addEventListener("click", createBoxes);
function createBoxes() {
  console.log(numberOfBoxes.value);
  let sizeBox = 30;
  for (let i = 1; i <= numberOfBoxes.value; i++) {
    const box = document.createElement("div");
    placeForBoxes.prepend(box);
    console.log(box);
    box.style.width = sizeBox + "px";
    box.style.height = sizeBox + "px";
    box.style.background = getRandomHexColor();
    sizeBox += 10;
  }
}

btnDestroyEl.addEventListener("click", () => {
  placeForBoxes.innerHTML = '<div id="boxes"></div>';
});
