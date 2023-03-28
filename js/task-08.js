const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", addHandler);

function addHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert`Please fill in all the fields!`;
  }
  const fd = new FormData(formEl);
  const objc = Object.fromEntries(fd);

  localStorage.setItem("form", JSON.stringify(objc));
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem("form")));
}
