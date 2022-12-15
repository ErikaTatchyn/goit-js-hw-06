const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const onInputChange = (e) => {
  if (e.currentTarget.value) {
    span.textContent = e.currentTarget.value;
  } else {
    span.textContent = "Anonymous";
  }
};

input.addEventListener("input", onInputChange);
