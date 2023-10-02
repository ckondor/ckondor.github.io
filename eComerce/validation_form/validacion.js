export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
      
    }
    
  }

  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "textEmpty",
    "textLimit",
  ];
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      textLimit: "El campo nombre no puede tener más de 50 caracteres.",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío.",
      typeMismatch: "El correo no es válido.",
      patternMismatch: "El correo no es válido.",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:"Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    }
    asunto: {
      valueMissing: "El campo asunto no puede estar vacío.",
      textLimit: "El campo asunto no puede tener más de 50 caracteres.",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacío.",
      textLimit: "El campo mensaje no puede tener más de 300 caracteres.",
    },
  };
  
  const validadores = {

  }

  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(input.validity);
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
