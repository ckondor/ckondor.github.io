//GET 
function listaProductos() {
    return fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => data.productos)
  }/**

const listaProductos = () => {
    fetch ('http://localhost:3000/productos')
    .then (response => response.json())
    .catch (error => console.log(error))
}
*/

//post

function crearProducto(producto) {
    return fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Error al crear el producto')
      })
  }
/** 
const crearProducto = (imageUrl, name, price) => {
    fetch ('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price
        })
    }) .then (respuesta=> {
        if (respuesta.ok){
                return respuesta.body
            
        }
    })
    throw new Error ('Error al crear el producto')   
}
    

export const productosServicios = {
    listaProductos, 
    crearProducto
}