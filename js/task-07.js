const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("change", () => {
  span.style.fontSize = `${input.value}px`;
});
