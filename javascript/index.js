class producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }

    vender(){
        this.vendido = true;
    }
}

const producto1 = new producto("Buzo Attack on Titan , 2500 ")
const producto2 = new producto("Buzo Naruto , 2400 ")
const producto3 = new producto("Buzo tokyo revengers , 2500 ")

