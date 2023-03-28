const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", checkСondition);

function checkСondition() {
  console.log(inputEl.value.length);
  console.log(inputEl.dataset.length);

  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    console.log("yes");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    console.log("no");
  }
}
