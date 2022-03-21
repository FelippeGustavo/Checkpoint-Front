
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const text = document.createTextNode(input.value);
  document.body.appendChild(text);

  document.querySelector(".remove").click();
});
const forms= document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = document.createTextNode(input.value);

  document.body.appendChild(text);

  form.reset();
});
