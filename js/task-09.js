function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorTextElInHtml = document.querySelector(".color");
const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", changeBackGround);
function changeBackGround() {
  const colorTextValue = getRandomHexColor();
  colorTextElInHtml.textContent = colorTextValue;
  bodyEl.style.backgroundColor = colorTextValue;
}
