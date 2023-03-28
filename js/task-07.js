const inputEl = document.getElementById("font-size-control");
inputEl.addEventListener("input", (event) => {
  document.getElementById(
    "text"
  ).innerHTML = `<span id="text" style = "font-size:${event.currentTarget.value}px;">Abracadabra!</span>`;

  console.log(event.currentTarget.value);
});
