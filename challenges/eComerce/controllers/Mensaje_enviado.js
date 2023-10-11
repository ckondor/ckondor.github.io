window.addEventListener('load', () => {
    const contactoFormulario = document.getElementById('contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');
    const overlay = document.getElementById('overlay');
    const enterado = document.getElementById('enterado');
  
    contactoFormulario.addEventListener('submit', (event) => {
      event.preventDefault();
      overlay.style.display = 'block';
      mensajeEnviado.style.display = 'block';
    });
  
    enterado.addEventListener('click', () => {
      overlay.style.display = 'none';
      mensajeEnviado.style.display = 'none';
    });
  });