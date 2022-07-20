let carrito
let productos = [];
let data;
fetch('catalogo.json')
    .then(response => response.json())
    
    .catch(error => console.error(error))

const fetchLocal = async () => {
    try {
        const response = await fetch('catalogo.json');
        const data = await response.json();
        productos = data;

    } catch (error) {
        console.error(error);
    }
  }
  console.log(data)
productos = [data]
console.log(productos)




if (JSON.parse(localStorage.getItem('carrito'))) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
  localStorage.setItem('carrito', JSON.stringify([]))
  carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {
  for (let i = 0; i < productos.length; i++) {
    const element = productos[i]
    const { id, name, price, img } = element
    const card = `
        <div class="card">
            <p>${name}</p>
            <div>
                <img class='imgProducto' src=${img} alt=""/>
            </div>
            <div>
                <p>$${price}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>AGRGEGAR AL CARRITO</button>
            </div>
        </div>`
    const container = document.getElementById('container')
    container.innerHTML += card
  }

  const btnAgregar = document.getElementsByClassName('btnAgregar')

  for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i]
    element.addEventListener('click', agregarAlCarrito)
  }
}

desplegarProductos()

function agregarAlCarrito(e) {
  const btn = e.target
  const id = btn.getAttribute('id')
  const prodEncontrado = productos.find((item) => item.id == id)
  const enCarrito = carrito.find((prod) => prod.id == prodEncontrado.id)
  console.log(enCarrito)
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'agregaste'+ productos.name +'al carrito',
    showConfirmButton: false,
    timer: 1500
  })

  if (!enCarrito) {
    carrito.push({ ...prodEncontrado, cantidad: 1 })
  } else {
    let carritoFiltrado = carrito.filter((prod) => prod.id != enCarrito.id)
    carrito = [
      ...carritoFiltrado,{ ...enCarrito, cantidad: enCarrito.cantidad + 1 },]
  }
  console.log(carrito)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)