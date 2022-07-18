console.log("Productos");

/* let remera = 1500
let pantalon = 3000
let pollera = 2000
let buzo = 3500*/

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

/* let remera = {
    color1: "Rojo",
    color2: "Negro",
    color3: "Blanco"
};*/

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