let total = 0;
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
productos.push(new producto("Buzo Attack on Titan ", 2500));
productos.push(new producto("Buzo Naruto ", 2400 ));
productos.push(new producto("Buzo tokyo revengers" , 2500 ));

for (const producto of productos){
      producto.precio;
      producto.iva
      total += producto.precio;
      console.log(total)
    }


