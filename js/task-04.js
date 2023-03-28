let counterValue = 0;

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", decrement);
document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", increment);

function decrement() {
  counterValue--;
  addResalt(counterValue);
}

function increment() {
  counterValue++;
  addResalt(counterValue);
}
const addResalt = (value) =>
  (document.getElementById("value").textContent = value);
