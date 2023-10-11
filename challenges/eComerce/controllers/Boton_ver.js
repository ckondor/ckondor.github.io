const verTodo = document.querySelectorAll('.ver-todo');
const verProducto = document.querySelectorAll('.ver-producto');

verTodo.forEach((enlace) => {
  let estado = false;
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    const seccion = event.target.closest('.products-seccion');
    const galeria = seccion.querySelector('.products-galeria');
    if (!estado) {
      galeria.style.flexWrap = 'wrap';
      enlace.textContent = '<- Ver menos';
      estado = true;
    } else {
      galeria.style.flexWrap = 'nowrap';
      enlace.textContent = 'Ver todo ->';
      estado = false;
    }
  });
});

verProducto.forEach((enlace) => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    // Código para mostrar el producto correspondiente
  });
});