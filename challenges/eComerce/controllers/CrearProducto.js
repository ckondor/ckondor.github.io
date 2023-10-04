const btnCrearProducto = document.querySelector("[data-form-btn]");
const fichaProducto = document.querySelector(".products-ficha");
console.log(fichaProducto);

btnCrearProducto.addEventListener("click", function (evento) {
  evento.preventDefault();
  const formularioRegistroProducto = document.querySelector("#registro-form");
  console.log(formularioRegistroProducto);
  const valoresFormulario = formularioRegistroProducto.elements;
  console.log(valoresFormulario);

  const valoresDeFormulario = [];
  console.log(valoresDeFormulario);

  for (let i = 0; i < valoresFormulario.length; i++) {
    const valoresDeInput = valoresFormulario[i];
   
    
    if (valoresDeInput.hasAttribute("data-form-input")) {
      const nombre = valoresDeInput.getAttribute("name");
      const valor = valoresDeInput.value;

      
      const matrizDeValores = {
        nombre: nombre,
        valor: valor
      };
     
      valoresDeFormulario.push(matrizDeValores);
    }
  } 
 


  const crearOrden = {
    url: {
      elemento: "img",
      propiedad: "src",
      nombre: "url"
    },
    name: {
      elemento: "h2",
      propiedad: "textContent",
      nombre: "name"
    },
    price: {
      elemento: "h3",
      propiedad: "textContent",
      nombre: "price"
    },
    description: {
      elemento: "p", // El elemento debe ser un párrafo (p)
      propiedad: "textContent", // La propiedad debe ser textContent
      nombre: "description"
    }
  };



function crearProducto() {
  const productoFicha = document.createElement("div");
  productoFicha.classList.add("products-ficha");
  console.log(productoFicha);

  for (let i = 0; i < valoresDeFormulario.length; i++) {
    const matrizDeValores = valoresDeFormulario[i];
    const nombre = matrizDeValores.nombre;
    const valor = matrizDeValores.valor;
    console.log(nombre, valor);

    if (crearOrden[nombre]) {
      const elemento = crearOrden[nombre].elemento;
      const propiedad = crearOrden[nombre].propiedad;

      const nuevoElemento = document.createElement(elemento);
      nuevoElemento[propiedad] = valor;

      if (nombre === "url") {
        nuevoElemento.src = valor;
      }

      productoFicha.appendChild(nuevoElemento);
    }
  }

  return productoFicha; // Retorna el nodo productoFicha
}
  

fetch("../navigation/productos.html")
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const contenedorProductos = html.querySelector(".productos-todos-products-galeria");
    
    const productoFicha = crearProducto();
    productoFicha.classList.add("products-ficha");
    productoFicha.classList.add("col-lg-4");
    productoFicha.classList.add("col-md-6");
      
    contenedorProductos.appendChild(productoFicha);
  })
  .catch(error => {
    console.log("Error en el fetch:", error); 
  });
} );      