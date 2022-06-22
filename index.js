function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function iva(x) {
    return x * 1.21;
}


let producto = prompt ("Seleccione un producto (1, 2, o 3)")


if (producto == 1) {
    let precioProducto1 = 1000;
    let descuento = 300;

    let cantidadProducto1 = parseInt(prompt ("Ingrese la cantidad"));
    
    let resultado1 = resta ((suma (multiplicar (precioProducto1, cantidadProducto1)), iva (precioProducto1)), descuento);

    if (cantidadProducto1 > 0) {
        alert (`Precio Total: ${resultado1}`);
    } else {
        alert ("Ingresa una cantidad mayor a 0");
    }
         

} else if (producto == 2) {

    let precioProducto2 = 800;
    let descuento = 300;
    
    let cantidadProducto2 = parseInt(prompt ("Ingrese la cantidad"));
    
    let resultado2 = resta ((suma (multiplicar (precioProducto2, cantidadProducto2)), iva (precioProducto2)), descuento);

    if (cantidadProducto2 > 0) {
        alert (`Precio Total: ${resultado2}`);
    } else {
        alert ("Ingresa una cantidad mayor a 0");
    } 

} else if (producto == 3) {

    let precioProducto3 = 1200;
    let descuento = 300;
    
    let cantidadProducto3 = parseInt(prompt ("Ingrese la cantidad"));
    
    let resultado3 = resta ((suma (multiplicar (precioProducto3, cantidadProducto3)), iva (precioProducto3)), descuento);

    if (cantidadProducto3 > 0) {
        alert (`Precio Total: ${resultado3}`);
    } else {
        alert ("Ingresa una cantidad mayor a 0");
    } 

} else {
    alert ("Ingrese 1, 2 o 3")
}




