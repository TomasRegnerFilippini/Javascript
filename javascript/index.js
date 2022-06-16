let total = 0;
let dato = prompt ("ingrese  attack  ,  naruto  o  tokyo / done para finalizar") 


class producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    iva(){
        this.precio = this.precio * 1.21;
    }
    
}
const productos =[];



new producto("Buzo Attack on Titan" , 2500 );
new producto("Buzo Naruto ", 2400 );
new producto("Buzo tokyo revengers" , 2500 );

const busos =[
    {nombre: "Buzo Attack on Titan "},
    {nombre: "Buzo Naruto"},
    {nombre: "Buzo tokyo revengers"},
]

const resultado = busos.filter((el) => el.nombre.includes("Attack"))
const resultado2 = busos.filter((el) => el.nombre.includes("Naruto"))
const resultado3 = busos.filter((el) => el.nombre.includes("Tokyo"))

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

while (dato != "done") {
   
    switch (dato) {
        case "attack":
            productos.push ("Buzo Attack on Titan");
            alert("se agrego el al carrito");
            break;
        case "naruto":
            productos.push("Buzo Naruto ");
            alert("se agrego el buso2 al carrito");
            break;
        case "tokyo":
            productos.push(new producto("Buzo tokyo revengers" , 2500 ));
            alert("se agrego el buso3 al carrito");
            break;
        default:
            alert("el dato ingresado es incorrecto");
            break;
    }
   
  dato = prompt ("ingrese  attack  ,  naruto  o  tokyo / done para finalizar") 
}

for (const producto of productos){
      producto.precio;
      producto.iva
      total += producto.precio;
      console.log(total)
    }


