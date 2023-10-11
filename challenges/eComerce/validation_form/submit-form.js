const formulario = document.getElementById('contacto');
const mensajeEnviado = document.getElementById('mensaje-enviado');


formulario.addEventListener('submit', (event) => {
event.preventDefault();
enviarMensaje();
});

function enviarMensaje() {
mensajeEnviado.style.display = 'block';
}