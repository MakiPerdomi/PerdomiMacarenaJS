console.log("Productos");

function comprar() {
    let carrito = prompt("Agrega al carrito: remera, pollera, buzo o pantalon");

    alert("Este es tu carrito: " + carrito);

    if (carrito == "remera") {
        alert("El precio es $1500 c/u")
    } else if (carrito == "pollera") {
        alert("El precio es $2000 c/u")
    } else if (carrito == "pantalon") {
        alert("El precio es $3000 c/u")
    } else if (carrito == "buzo") {
        alert("El precio es $3500 c/u")
    } else {
        alert("Sin stock")
    };
}

comprar()

//Stock de remeras con "Do while"

let stockRemeras = 10;

do {

    stockRemeras--;

    document.write(stockRemeras + "<br>");
    if (stockRemeras == 0) {
        document.write("Sin stock")
    }

}

while (stockRemeras > 0)

//Stock de polleras con "For"

for (let i = 15; i > 0; i--) {

    document.write(i + "<br>")
}

//Objetos: Productos

const producto1 = {
    nombre: "Remera",
    precio: "1500",
    color1: "Rojo",
    color2: "Negro",
    color3: "Blanco",
}

const producto2 = {
    nombre: "Pantalon",
    precio: "3000",
    color1: "Azul",
    color2: "Negro",
}

const producto3 = {
    nombre: "Pollera",
    precio: "2000",
    color1: "Jean",
    color2: "Negro",
}

const producto4 = {
    nombre: "Buzo",
    precio: "2000",
    color1: "Rojo",
    color2: "Violeta",
    color3: "Amarillo",
}

const productos = [producto1, producto2, producto3, producto4];


function agregarAlCarrito(params) {
    
}