const textArea = document.getElementById("encriptador");
const mensaje = document.getElementById("mensaje-id");
const copia = document.getElementById("btn-copiar");

copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.getElementById("encriptador").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/i);

    if(!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

const mensajeID = document.getElementById('mensaje-id');
const divToHide = document.getElementById('overlay-remove');

function mostrarDivSegunContenido() {
    const textoIngresado = mensajeID.value.trim(); 
    const placeholder = mensajeID.getAttribute('placeholder').trim(); 

    if (textoIngresado !== '' || placeholder !== '') {
        divToHide.style.display = 'none'; 
    } else {
        divToHide.style.display = 'block'; 
    }
}


window.addEventListener('load', mostrarDivSegunContenido);
mensajeID.addEventListener('input', mostrarDivSegunContenido);

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";

        mostrarDivSegunContenido();
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}



