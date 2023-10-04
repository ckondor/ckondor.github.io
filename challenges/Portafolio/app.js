import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input, textarea");


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


const ids = ["name", "email", "asunto", "mensaje"];

function handleInput(event) {
    const input = event.target;
    const maxLength = input.maxLength;
    const valor = input.value.trim();

    if (valor.length >= maxLength) {
      
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML ="Se alcanzo el limite de caracteres";
      } else {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
      }
};

ids.forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", handleInput);
  }
});



