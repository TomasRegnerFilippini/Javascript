
let carrito;

if(JSON.parse(localStorage.getItem("carrito"))){
    carrito = JSON.parse(localStorage.getItem("carrito"))
  }
  else{
    localStorage.setItem("carrito", JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem("carrito"))
  }

  
  
  function showProducts() {
    
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      const {id, category , name ,price , img} = element
      const card = `
      <div class="card">
      <p>${name}</p>
                <div>
                <img class="imgProducto" src=${img} alt="/>
                </div>
                <div>
                <p class="price">$${price}</P>
                </div>
                <div class "addBoton">
                <button id=${id} class="btnAgregar"> AGREGAR AL CARRITO </BUTTON>
                </div>
            </div>   
       `

       const container = document.getElementById("container")
       container.innerHTML += card
      }
      
    }
    
    const btnAgregar = document.getElementsByClassName("btnAgregar")

   

    for (let i = 0; i < btnAgregar.length; i++) {
      const element = btnAgregar [i];
      element.addEventListener("clik" , agregarAlCarrito)
      
    }
    
  showProducts()

  function agregarAlCarrito(e) {
    const btn = e.target;
    const id = btn.getAttribute ("id")
    const prodEncontrado = products.find(prod = prod.id == idBoton)
    const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    console.log(enCarrito)
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'agregaste'+ products.name +'al carrito',
      showConfirmButton: false,
      timer: 1500
    })
    
    if(!enCarrito){
         carrito.push({...prodEncontrado, cantidad : 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad : enCarrito.cantidad +1}]    
    }

   localStorage.setItem("carrito" , JSON.stringify(carrito))
  }


 