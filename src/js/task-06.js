const input = document.querySelector("#validation-input");

const onBlur = () => {
  if (input.value.length === input.dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", onBlur);
