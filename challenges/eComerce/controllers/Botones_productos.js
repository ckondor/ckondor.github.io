const elementosProducto = document.querySelectorAll('.products-ficha');

elementosProducto.forEach((elemento) => {
    const iconoTrash = elemento.querySelector('.fa-trash');
    iconoTrash.addEventListener('click', function () {
        elemento.remove();
    });
    const iconoPencil = elemento.querySelector('.fa-pencil');
    iconoPencil.addEventListener('click', function () {
        const elementosTexto = elemento.querySelectorAll('h2, h3');
        const imagen = elemento.querySelector('img');
        elementosTexto.forEach((elementoTexto) => {
            elementoTexto.setAttribute('contenteditable', 'true'); 
        });
        imagen.setAttribute('contenteditable', 'true'); 
    });
});
