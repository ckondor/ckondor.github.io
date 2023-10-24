const elementosFicha = document.querySelectorAll('.products-ficha');
const listaResultados = document.getElementById('lista-resultados');

elementosFicha.forEach((elemento, index) => {
    const idUnico = `ficha-${index + 1}`;
    elemento.setAttribute('id', idUnico);
    const h2 = elemento.querySelector('h2');
    const textoH2 = h2.textContent;
    const enlace = document.createElement('a');
    enlace.textContent = textoH2;
    enlace.href = `#${idUnico}`;
    const li = document.createElement('li');
    li.appendChild(enlace);
    listaResultados.appendChild(li);
});
