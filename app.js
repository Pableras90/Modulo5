const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

//EJERCICIO 1: Mostrar listado por consola

for (i = 0; i < carrito.length; i++) {
    imprimir(carrito[i]);
}

function imprimir(lista) {
    console.log("----------")
    for (propiedad in lista) {
        console.log(propiedad.toUpperCase() + " : " + lista[propiedad]);
    }
}


//EJERCICIO 3: Total del carrito

let total = 0

for (listado of carrito) {
    total += listado.price * listado.count;
}
console.log("Total: " + total)

//EJERCICIO 4: Ver si es prime o no

for (listado of carrito) {
    if (listado.premium) {
        imprimir(listado)
    }
}


//EJERCICIO 1 (Opcional):Gastos de envío si o no

let totalCarro = true;

for (i = 0; i < carrito.length; i++) {
    totalCarro = totalCarro && carrito[i].premium
}

if (totalCarro) {
    console.log("Sin gastos de envio")
}
else {
    console.log("Con gastos de envio")
}



//EJERCICIO 2(Opcional): Mostrar Html

var html = carrito.map(function (list) {
    return '<li>' + "ID: " + + list.id + "<br>" + 'NAME: ' + list.name + "<br>" + "PRICE: " + list.price + '<br>' + "COUNT: " + list.count + '<br>' + "PREMIUM: " + list.premium + '</li>'
})
document.getElementById("lista").innerHTML = html;


//EJERCICIO 3(Opcional): Descuento del 5% si compra mayor de 50€

if (total > 50) {
    total = total * 0.95
}

console.log("El total con descuento es: " + total)



//EJERCICIO 2: Mostrar array

console.log(carrito)

//Borrar array
let index = 3;
elementoEliminado = carrito.splice(index, 3);

//Mostrar array con elemento borrado
console.log(carrito)
console.log(elementoEliminado)
