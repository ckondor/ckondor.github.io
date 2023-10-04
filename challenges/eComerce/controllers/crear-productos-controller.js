import { productosServicios } from "../servicios/productos-servicios"

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const imageUrl = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-nombre]').value
    const price = document.querySelector('[data-precio]').value

    productosServicios.crearProducto(imageUrl, name, price)
    .then(respuesta => {
        window.location.href = './navigation/index.html'
        console.log(respuesta)      
    })
    .catch(error => {    
        console.log(error)
    })
})
  

