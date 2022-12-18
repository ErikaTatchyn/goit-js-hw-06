const inputEls = document.querySelectorAll("input");
const submitBtnEl = document.querySelector("button");
const formEl = document.querySelector("form");

inputEls.forEach((el) => {
  el.addEventListener("blur", () => {
    if (el.value === "") {
      alert("please insert");
    }
  });
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.value !== "" && elements.password.value !== "") {
    console.log({
      email: elements.email.value,
      password: elements.password.value,
    });
    formEl.reset();
  }
});
