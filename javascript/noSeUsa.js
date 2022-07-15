/*let showAllProducts= document.getElementById("showAllProducts")
let cart;

//filter
/*
const resultado = busos.filter((el) => el.nombre.includes("Attack"))
const resultado2 = busos.filter((el) => el.nombre.includes("Naruto"))
const resultado3 = busos.filter((el) => el.nombre.includes("Tokyo"))

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

//array carrito
const carrito=[];

 function mostrarProductos(){
    products.forEach((product) => {
        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        let name = document.createElement("name")
        name.innerText=(product.name)
        let price =document.createElement("p")
        price.innerText=(product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText =("Agregar al carrito")
        card.append(img,name,price,buyButton)

        buyButton.addEventListener("click",function(){
            carrito.push(product)
            alert("agregaste" + product.name + "al carrito")
            localStorage.setItem("carrito", JSON.stringify(cart))
        })
    }
    )
 }

  mostrarProductos()
  console.log(carrito)

  if(JSON.parse(localStorage.getItem("carrito"))){
    cart = JSON.parse(localStorage.getItem("carrito"))
  }
  else{
    localStorage.setItem("carrito", JSON.stringify([]))
    cart = JSON.parse(localStorage.getItem("carrito"))
  }
*/
  
/*let data;
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
console.log(productos)*/

/*function cargarJSON() {
  fetch("catalogo.json")
  .then(function(result){
      return result.json();
  })
    .then(function(t){

      fetch("catalogo.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("2"+data)
    })
   })
   data = data;
}*/