document.getElementById("name-input").addEventListener("input", (event) => {
  const nameOutput = document.getElementById("name-output");
  event.currentTarget.value
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = "Anonymous");
});
