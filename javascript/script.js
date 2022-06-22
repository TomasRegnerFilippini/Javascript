let total = 0;
//let dato = prompt ("ingrese  attack  ,  naruto  o  tokyo / done para finalizar") 
let showAllProducts= document.getElementById("showAllProducts")

/*class producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.id = "id";
    }
    iva(){
        this.precio = this.precio * 1.21;
    }
    
}

let product1 = new producto("Buzo Attack on Titan" , 2500 );
let product2 = new producto("Buzo Naruto ", 2400 );
let product3 = new producto("Buzo tokyo revengers" , 2500 );


const productos =[product1, product2,product3];*/





//filter
/*
const resultado = busos.filter((el) => el.nombre.includes("Attack"))
const resultado2 = busos.filter((el) => el.nombre.includes("Naruto"))
const resultado3 = busos.filter((el) => el.nombre.includes("Tokyo"))

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
*/
//array carrito
const carrito=[];

/*while (dato != "done") {
   
    switch (dato) {
        case "attack":
           carrito.push (product1);
            alert("se agrego el al carrito");
            break;
        case "naruto":
           carrito.push(product2);
            alert("se agrego el buso2 al carrito");
            break;
        case "tokyo":
            carrito.push(new producto(product2));
            alert("se agrego el buso3 al carrito");
            break;
        default:
            alert("el dato ingresado es incorrecto");
            break;
    }
   
  dato = prompt ("ingrese  attack  ,  naruto  o  tokyo / done para finalizar") 
}

/*for (const producto of productos){
      producto.precio;
      producto.iva
      total += producto.precio;
      console.log(total)
    }*/


    //card
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
        })
    }
    )
 }

  mostrarProductos()
